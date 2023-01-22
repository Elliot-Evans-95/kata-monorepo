#!/bin/bash

LocalTime=$(date '+%d-%m-%Y')
GitName=$(git config user.name)
GitNameWithoutWhitespace=$(echo "$GitName" | tr -d '[:space:]')
Name="fizz-buzz"
BranchName="$Name-kata-$GitNameWithoutWhitespace-$LocalTime"
#TimeInSeconds=300
TimeInSeconds=5
TimeInMinutes=$((TimeInSeconds/60))
NumberOfSuccessfulCommits=0
HighestNumberOfSuccessfulCommits=0
KataNotComplete=true
FailMessage="FAIL"

while getopts "n:" arg; do
  case $arg in
    n) Name=$OPTARG;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
    *) break;;
  esac
done

while getopts "t:" arg; do
  case $arg in
    t) Time=$OPTARG;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
    *) break;;
  esac
done

echo "Welcome to the $Name Kata..."
sleep 1
echo "Instructions and info about the kata can be found in the README.md file..."
sleep 1
echo "You gain points based on every successful commit..."
sleep 1
echo "You gain a point for every successful commit..."
sleep 1
echo "If you fail to commit due to failed tests you will not gain a point..."
sleep 1
echo "We will keep a track of your score and start a timer when you start..."
printf "\n"
sleep 1
echo "Auto Save must be turned on before continuing, is it turned on?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) break;;
        No ) exit;;
    esac
done
printf "\n"
sleep 1
echo "This script will create a branch called $BranchName to save your work, is this name ok?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) break;;
        No ) exit;;
    esac
done
printf "\n"
sleep 1
echo "Lastly the default time to commit changes for this kata is $TimeInMinutes minutes, is this time ok?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) break;;
        No ) exit;;
    esac
done
printf "\n"
sleep 1
echo "Creating branch called $BranchName and setting default time to $TimeInMinutes minutes..."
git checkout -b "$BranchName"
printf "\n"
sleep 2
echo "Ready?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) break;;
        No ) exit;;
    esac
done
printf "\n"
sleep 1
echo "3"
sleep 1
echo "2"
sleep 1
echo "1"
sleep 1
echo "Start!"
while [ $KataNotComplete ]; do
  echo "Successful commits: $NumberOfSuccessfulCommits"
  echo "When you have finished the kata Press the f key"
  printf "\n"

#  sleep $TimeInSeconds
#  printf "time"

  read -rsn1 -t $TimeInSeconds input
  if [ "$input" = "f" ]; then
      echo "FINISHED !"
      break
  else
        if npm run test "$Name" 2>&1 | grep -q "$FailMessage"; then
                  HighestNumberOfSuccessfulCommits=$NumberOfSuccessfulCommits
                  NumberOfSuccessfulCommits=0
                  git stash push -m "$BranchName" "*.spec.*"
                  git checkout -- .
                  git apply --index 1
                  echo "REVERTED | Number of commits made: $HighestNumberOfSuccessfulCommits"
                  printf "\n"
        else
                  NumberOfSuccessfulCommits=$((NumberOfSuccessfulCommits+1))
                  git add .
                  git commit -m "kata(fizz-buzz): name - $GitName | tally - $NumberOfSuccessfulCommits"
                  git push -u origin "$BranchName"
                  printf "\n"
                  echo "COMMITTED! | Number of commits made: $NumberOfSuccessfulCommits"
                  printf "\n"
        fi
  fi

done

echo "Highest number of commits: $HighestNumberOfSuccessfulCommits | Time Taken: 00-00-00"
