#! /usr/bin/bash
initDir=$(pwd)
echo $initDir
if [ -f "DirLoopOut.txt" ]; then
    rm DirLoopOut.txt
fi
touch DirLoopOut.txt

cd /
# find . -maxdepth 2 > $initDir/DirLoopOut.txt
for FILE in */ ; do
    [ -L "${FILE%/}" ] && continue
    for FILE2 in "$FILE"*; do
        if [ -d "$FILE2" ]; then
            echo "$FILE2" >> $initDir/DirLoopOut.txt;
        fi
    done
done

cd $initDir
cat DirLoopOut.txt