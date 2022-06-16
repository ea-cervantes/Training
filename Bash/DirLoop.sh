#! /usr/bin/bash
initDir=$(pwd)
echo $initDir
if [ -f "DirLoopOut.txt" ]; then
    rm DirLoopOut.txt
fi
touch DirLoopOut.txt

cd /
# find . -maxdepth 1 > $initDir/DirLoopOut.txt
for FILE in *; do
if [ -d "$FILE" ];
then
    echo $FILE >> $initDir/DirLoopOut.txt
fi
done

cd $initDir
cat DirLoopOut.txt