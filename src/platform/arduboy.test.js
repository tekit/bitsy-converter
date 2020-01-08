import {convertArduboy} from './arduboy';

const SCRIPT =
`Your game's title here

# BITSY VERSION 6.4

! ROOM_FORMAT 1

PAL 0
0,82,204
128,159,255
255,255,255

ROOM 0
0,0,0,0,0,0,a,0,a,0,0,0,0,0,0,0
0,a,a,a,a,a,a,0,a,a,a,a,a,a,a,0
0,a,b,b,b,0,0,0,0,0,0,b,b,b,a,0
0,a,b,b,b,0,0,0,0,0,0,b,b,b,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,0,0,0,0,0,0,0,0,0,0,0,0,a,0
0,a,b,b,b,0,0,0,0,0,0,b,b,b,a,0
0,a,b,b,b,0,0,0,0,0,0,b,b,b,a,0
0,a,a,a,a,a,a,a,a,a,a,a,a,a,a,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
EXT 7,0 1 7,15
PAL 0

ROOM 1
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,b,b,b,b,b,0,0,b,b,b,b,0,0,0
0,b,b,b,b,b,b,b,b,b,0,b,0,b,0,0
0,b,b,0,0,0,0,0,0,0,0,0,b,0,0,0
0,0,0,0,a,a,a,a,a,a,a,0,0,0,0,0
a,a,a,a,a,0,0,0,0,0,a,0,0,0,0,0
c,0,0,0,0,0,0,0,0,0,a,0,0,0,0,0
a,a,a,a,a,0,0,0,0,0,a,0,0,0,0,0
0,0,0,0,a,0,0,0,0,0,a,0,0,0,0,0
0,0,0,0,a,a,a,0,a,a,a,0,0,0,0,0
0,0,0,0,0,0,a,0,a,0,0,0,0,0,0,0
EXT 7,15 0 7,0
EXT 0,11 2 14,11
PAL 0

ROOM 2
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,a,a,a,a
0,0,0,0,0,0,0,0,0,0,0,0,a,d,0,a
0,0,0,0,0,0,0,0,0,0,0,0,a,a,a,a
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
END 0 13,11
PAL 0

TIL a
11111111
10000001
10000001
10011001
10011001
10000001
10000001
11111111
WAL true

TIL b
00000000
00110110
00000000
01101100
00000000
00110110
00000000
01101100
>
00000000
01101100
00000000
00110110
00000000
01101100
00000000
00110110

TIL c
00111110
01000010
10000001
10000010
10000001
10000010
01000001
00111110

TIL d
00000000
00000000
11000001
10000001
11010001
10011011
11011011
00000000

SPR A
00011000
00011000
00011000
00111100
01111110
10111101
00100100
00100000
>
00011000
00011000
10011001
01111110
00111100
00111100
00100100
00000100
POS 0 4,4

SPR a
00000000
00000000
01010001
01110001
01110010
01111100
00111100
00100100
>
00000000
01010000
01110001
01110001
01110010
00111100
00111100
01000010
DLG SPR_0
POS 0 8,12

SPR b
00000001
00000001
00000001
00000001
11111111
10000001
10000001
10000001
DLG SPR_1
POS 0 10,6

ITM 0
00000000
00000000
00000000
00111100
01100100
00100100
00011000
00000000
NAME tea
DLG ITM_0

DLG SPR_0
I'm a cat. Meow!

DLG ITM_0
Encontraste um copo com chá quentinho

DLG SPR_1
Hello, I'm a chair.

END 0
This is the end.

VAR a
42`


it('converts Bitsy script with no error', () => {
	convertArduboy(SCRIPT);
});
