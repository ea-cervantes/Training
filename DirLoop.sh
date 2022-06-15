#! /usr/bin/bash
pwd > 'initDir'
mv initDir /
touch DirLoopOut.txt
cd /
find . -maxdepth 2 > $initDir/DirLoopOut.txt

