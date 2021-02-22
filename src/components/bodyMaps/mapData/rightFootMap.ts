import { rightFootRes } from './responsive';

const rightFootMapParts = {
  'right-groin': {
    shape: 'poly',
    points:
      '56,52,59,54,61,56,64,58,67,60,70,62,73,63,74,64,76,\n  64,78,64,80,64,82,64,84,64,84,64,84,67,84,71,84,74,84,77,84,77,84,77,84,80,85,83,\n  85,85,85,88,85,88,85,88,85,89,85,91,85,93,85,96,85,98,85,101,85,103,85,105,85,107,\n  85,108,85,108,85,108,85,109,85,111,85,113,85,116,84,119,84,121,84,124,84,126,84,\n  128,84,129,84,129,84,129,83,128,82,127,81,125,80,123,79,122,77,120,76,118,75,116,\n  74,115,73,114,73,114,70,109,65,104,61,99,56,94,51,90,47,86,47,86,46,84,44,83,42,\n  81,39,79,36,77,34,75,31,73,29,71,27,69,26,68,26,68,25,67,23,66,21,64,19,63,17,61,\n  16,60,15,58,15,54,16,51,16,47,17,43,18,41,20,41,23,41,27,42,30,42,34,43,38,45,41,\n  46,45,47,48,49,52,50,54,51,56,52',
    alt: 'right-groin',
    name: 'right-groin',
  },
  'right-thigh-front': {
    shape: 'poly',
    points:
      '71,114,73,116,75,120,78,123,80,127,83,131,83,133,\n  84,136,84,141,83,146,83,152,81,157,81,160,81,160,80,163,80,167,79,172,78,177,77,\n  183,76,189,75,195,74,199,73,203,72,206,72,206,72,210,71,216,70,221,69,226,67,231,\n  65,235,64,233,63,231,61,229,60,227,59,225,57,223,53,219,49,217,43,215,38,214,33,\n  214,28,216,25,217,24,219,22,220,20,222,19,224,17,226,17,226,17,223,16,219,16,216,\n  15,212,15,212,15,212,15,210,14,206,13,202,12,197,11,193,10,188,9,183,9,179,8,175,\n  7,173,7,173,6,164,6,155,5,146,5,137,5,128,5,119,5,115,5,110,6,104,7,99,7,94,8,\n  90,9,85,11,81,12,76,13,72,14,68,14,62,18,65,24,68,29,72,34,76,40,81,45,85,50,90,\n  55,95,60,100,64,105,68,110,71,114',
    alt: 'right-thigh-front',
    name: 'right-thigh-front',
    linkedWith: ['right-thigh-back-left', 'right-thigh-back-right'],
  },
  'right-knee-front': {
    shape: 'poly',
    points:
      '60,229,61,230,62,232,62,234,63,236,64,238,64,240,\n  64,244,62,249,61,254,59,259,57,265,57,272,57,272,57,274,57,277,57,279,57,282,57,\n  282,57,284,56,285,54,287,53,288,51,289,49,290,44,292,39,293,36,293,34,293,33,292,\n  31,292,30,292,28,291,27,290,25,289,22,287,20,285,18,283,16,280,15,278,14,276,14,\n  274,14,272,14,269,15,267,15,265,15,265,15,264,15,261,15,259,15,256,15,254,16,251,\n  16,248,16,246,16,243,16,242,16,242,16,237,17,232,19,228,21,224,23,220,28,218,34,\n  216,40,216,46,218,51,220,56,224,60,229',
    alt: 'right-knee-front',
    name: 'right-knee-front',
  },
  'right-shin-right': {
    shape: 'poly',
    points:
      '21,304,21,304,22,305,22,307,23,309,23,311,24,314,\n  25,316,26,318,26,320,27,322,27,323,27,323,27,323,28,326,29,329,30,332,31,335,31,\n  335,31,335,32,337,32,339,33,342,34,346,35,349,36,353,37,356,37,359,38,361,38,363,\n  38,363,38,363,39,365,39,369,40,373,41,377,42,382,43,387,43,392,44,395,45,399,45,\n  401,45,401,45,401,42,400,40,400,37,399,34,398,34,398,34,398,32,398,29,398,27,397,\n  24,397,24,397,24,397,24,398,23,399,23,400,22,401,22,401,22,391,21,384,20,377,18,\n  371,17,365,15,356,14,350,14,344,13,339,12,334,12,330,12,325,12,321,11,316,12,311,\n  12,306,12,300,13,294,13,291,13,290,13,288,13,287,13,285,14,281,14,281,14,282,15,\n  285,16,287,17,290,18,293,19,295,19,298,20,300,21,303,21,304,21,304',
    alt: 'right-shin-right',
    name: 'right-shin-right',
    linkedWith: 'right-shin-right-back',
  },
  'right-shin-left': {
    shape: 'poly',
    points:
      '32,294,37,296,41,295,46,293,50,292,54,289,58,287,\n  58,287,58,289,58,291,58,293,58,296,58,300,58,303,58,306,58,308,58,310,58,312,58,\n  312,58,322,57,332,55,341,53,351,51,360,49,370,49,370,49,371,49,373,49,375,48,378,\n  48,380,48,383,48,385,47,387,47,389,47,390,47,390,47,392,47,394,47,397,47,399,47,\n  401,46,403,46,399,45,394,45,388,44,382,43,376,41,369,40,363,39,356,37,351,36,345,\n  35,340,33,336,32,333,31,329,30,325,28,321,27,316,25,311,24,307,22,302,21,298,20,\n  294,19,290,19,287,21,288,23,290,25,291,27,292,30,293,32,294',
    alt: 'right-shin-left',
    name: 'right-shin-left',
    linkedWith: 'right-shin-left-back',
  },
  'right-foot-wrist': {
    shape: 'poly',
    points:
      '47,407,47,407,47,411,48,414,49,418,49,421,49,421,\n  49,423,50,425,51,428,51,430,51,432,49,434,49,435,49,436,49,436,49,437,49,438,49,\n  439,48,440,47,441,45,442,42,442,40,443,37,443,32,443,26,442,23,439,20,437,20,434,\n  19,430,19,427,20,425,20,425,19,422,19,417,20,413,21,409,23,404,25,402,25,402,25,\n  402,26,402,26,401,26,401,26,401,30,401,34,401,38,401,42,402,45,403,47,407',
    alt: 'right-foot-wrist',
    name: 'right-foot-wrist',
  },
  'right-foot-overside-right': {
    shape: 'poly',
    points:
      '32,445,33,445,36,445,38,444,40,444,42,444,42,445,\n  42,448,41,450,41,452,41,454,40,456,40,457,40,457,40,458,39,460,39,461,38,463,38,\n  465,37,467,36,469,36,471,36,472,35,473,35,473,35,475,35,480,35,484,35,488,35,492,\n  34,494,34,494,32,494,30,494,29,493,27,492,27,490,27,490,25,490,24,489,22,489,21,\n  488,21,485,21,485,19,485,18,485,16,485,15,484,14,481,14,479,14,476,14,472,14,468,\n  14,464,14,460,14,456,15,452,15,448,16,444,17,441,18,439,20,440,23,441,25,442,27,\n  443,29,444,32,445',
    alt: 'right-foot-overside-right',
    name: 'right-foot-overside-right',
  },
  'right-foot-overside-left': {
    shape: 'poly',
    points:
      '51,441,51,441,51,444,52,447,52,449,53,452,53,452,\n  53,452,53,454,53,456,53,458,54,461,54,464,54,467,54,470,55,472,55,475,55,476,55,\n  476,55,476,55,477,55,479,54,480,54,482,53,484,53,486,53,488,52,490,52,491,52,492,\n  52,492,52,492,52,493,52,495,51,496,51,498,48,499,48,499,46,498,45,497,43,497,41,\n  496,40,495,38,496,37,496,37,495,36,495,36,494,36,494,35,493,36,491,36,491,36,491,\n  36,490,36,488,36,486,37,484,37,481,37,479,37,476,37,474,38,472,38,471,38,471,39,\n  464,40,462,41,459,42,457,42,456,43,453,43,451,43,448,43,444,43,444,45,443,47,443,\n  49,442,51,441,51,441',
    alt: 'right-foot-overside-left',
    name: 'right-foot-overside-left',
  },
  'right-thigh-back-left': {
    shape: 'poly',
    points:
      '379,117,379,129,379,141,378,154,377,166,376,178,374,\n  190,374,190,373,193,373,196,372,199,371,202,371,202,371,202,371,204,371,206,371,\n  208,370,211,370,214,369,217,369,220,369,222,368,225,368,226,368,226,368,228,368,\n  230,368,232,368,233,368,235,367,237,366,236,366,235,365,234,364,232,364,231,363,\n  230,363,228,363,226,363,224,363,223,364,221,364,219,364,219,364,217,364,215,364,\n  212,364,210,364,210,364,210,364,207,364,204,365,201,365,198,365,198,365,198,365,\n  196,365,194,365,191,365,188,365,184,365,181,365,177,365,174,365,172,365,170,365,\n  170,365,170,365,167,365,163,364,160,364,156,364,156,364,156,364,153,364,149,364,\n  146,364,142,364,142,364,142,364,141,364,139,364,138,364,135,364,133,363,131,363,\n  129,363,127,363,125,363,124,363,124,363,124,363,121,363,117,362,114,362,110,362,\n  110,362,107,364,105,365,104,367,102,369,100,370,98,372,96,373,93,373,90,374,87,375,\n  85,375,82,376,83,376,86,377,89,377,92,377,95,378,99,378,103,378,106,379,110,379,\n  113,379,115,379,117',
    alt: 'right-thigh-front #1',
    name: 'right-thigh-back-left',
    linkedWith: ['right-thigh-front', 'right-thigh-back-right'],
  },
  'right-thigh-back': {
    shape: 'poly',
    points:
      '343,117,343,117,344,117,346,116,347,115,349,114,352,\n  113,354,113,356,112,357,111,359,110,360,110,360,110,360,110,360,111,360,113,360,\n  115,360,118,361,121,361,123,361,126,361,128,361,130,361,131,361,131,361,131,361,\n  135,362,138,362,142,362,145,362,145,362,145,362,146,362,148,362,150,362,152,362,\n  155,362,157,362,159,362,161,362,163,362,164,362,164,362,164,362,168,362,173,363,\n  177,363,181,363,181,363,181,363,184,363,188,363,191,363,194,363,194,363,194,363,\n  198,362,203,362,207,362,211,362,211,362,211,362,212,362,214,362,216,362,218,362,\n  221,361,223,361,225,361,227,361,229,361,230,361,230,357,230,354,230,351,229,349,\n  229,347,229,345,229,343,229,342,229,339,230,337,230,333,231,329,233,329,233,329,\n  230,328,226,327,222,326,216,326,210,325,205,324,199,323,195,323,191,322,188,322,\n  188,322,188,322,186,322,182,321,179,321,174,320,169,319,165,319,160,318,157,318,\n  153,318,151,318,151,318,151,317,148,317,144,316,141,315,137,315,137,315,137,315,\n  136,315,134,315,132,315,129,315,127,314,124,314,122,314,120,314,118,314,117,314,\n  117,319,118,324,119,329,119,333,119,338,119,343,117',
    alt: 'right-thigh-back',
    name: 'right-thigh-back',
  },
  'right-thigh-back-right': {
    shape: 'poly',
    points:
      '311,117,311,117,311,118,312,120,312,122,312,124,312,\n  124,312,124,313,128,313,132,314,135,314,139,314,139,314,139,314,141,315,144,315,\n  148,316,152,316,157,317,161,317,165,318,169,318,172,318,174,318,174,318,174,319,\n  176,319,179,320,183,320,187,321,192,322,196,322,200,323,204,323,207,324,209,324,\n  209,324,209,324,210,324,213,324,215,325,218,325,221,325,224,326,227,326,229,326,\n  231,326,233,326,233,326,233,325,235,324,236,322,238,321,240,321,240,321,240,321,\n  239,320,236,320,234,320,231,319,228,319,225,318,222,318,220,317,218,317,216,317,\n  216,317,216,317,214,316,212,316,210,315,207,315,204,314,200,314,197,313,195,313,\n  193,312,191,312,191,312,191,312,190,312,188,312,186,311,183,311,180,311,177,310,\n  175,310,172,310,170,310,169,310,169,308,161,306,150,305,139,304,134,303,128,303,\n  123,302,118,302,114,302,110,302,110,304,112,307,113,309,115,311,117,311,117',
    alt: 'right-thigh-front #2',
    name: 'right-thigh-back-right',
    linkedWith: ['right-thigh-front', 'right-thigh-back-left'],
  },
  'right-knee-back': {
    shape: 'poly',
    points:
      '365,236,367,238,368,241,368,243,368,245,368,247,368,\n  250,368,250,368,252,368,254,369,257,369,260,369,263,369,266,370,270,370,272,370,\n  274,370,276,370,276,370,278,370,283,370,287,370,291,370,295,369,297,369,298,368,\n  300,367,301,366,302,365,303,364,304,363,305,361,306,360,307,358,308,357,308,355,\n  309,350,310,346,310,342,309,337,308,333,307,329,304,328,303,326,302,325,301,324,\n  300,323,299,322,297,322,295,322,293,322,290,323,287,323,284,324,281,325,274,326,\n  267,326,262,326,258,325,254,324,252,323,249,322,247,322,245,322,243,323,241,324,\n  239,325,238,327,237,329,235,332,233,337,232,340,231,344,231,348,231,353,231,358,\n  232,362,233,365,236',
    alt: 'right-knee-back',
    name: 'right-knee-back',
  },
  'right-shin-left-back': {
    shape: 'poly',
    points:
      '333,309,333,309,333,311,333,312,333,314,333,317,333,\n  320,332,322,332,325,332,327,332,329,332,330,332,330,332,330,332,332,333,334,333,\n  335,333,337,333,337,333,337,333,338,333,340,333,343,333,345,334,348,334,351,334,\n  354,334,356,334,358,334,359,334,359,334,359,335,362,335,366,336,369,337,372,337,\n  372,337,372,337,374,337,377,338,379,338,381,338,381,338,381,337,381,336,382,335,\n  382,334,382,334,382,334,382,334,381,334,380,334,378,334,377,334,377,334,372,333,\n  367,332,361,331,355,329,348,328,342,327,335,325,329,324,323,323,317,322,312,322,\n  307,322,307,322,306,322,305,322,303,322,302,322,302,322,302,323,302,324,303,325,\n  304,326,305,327,306,329,307,330,307,331,308,332,309,333,309,333,309',
    alt: 'right-shin-left #1',
    name: 'right-shin-left-back',
    linkedWith: 'right-shin-left',
  },
  'right-shin-back': {
    shape: 'poly',
    points:
      '354,311,355,317,355,321,356,325,356,329,356,332,356,\n  335,356,338,355,341,355,345,355,348,354,352,354,358,354,358,354,359,354,361,354,\n  364,353,366,353,369,353,372,353,375,352,377,352,379,352,380,352,380,352,380,349,\n  380,346,380,343,380,340,380,340,380,339,377,338,374,338,370,337,367,337,363,337,\n  360,336,352,335,344,335,335,335,326,335,318,336,310,340,311,342,311,345,312,348,\n  312,350,312,354,311',
    alt: 'right-shin-back',
    name: 'right-shin-back',
  },
  'right-shin-right-back': {
    shape: 'poly',
    points:
      '370,321,370,327,369,334,367,341,365,348,363,355,362,\n  361,361,364,360,368,359,372,358,376,357,379,355,382,355,382,355,378,355,374,356,\n  369,356,365,356,365,356,365,356,363,356,359,356,356,357,352,357,347,357,343,357,\n  338,358,335,358,331,358,329,358,329,358,329,358,325,358,321,357,316,357,312,357,\n  312,357,312,358,311,359,310,360,309,362,308,363,307,365,305,366,304,367,303,368,\n  302,369,301,369,301,370,303,370,307,370,311,370,315,370,318,370,321',
    alt: 'right-shin-right #1',
    name: 'right-shin-right-back',
    linkedWith: 'right-shin-right',
  },
  'right-foot-wrist-back': {
    shape: 'poly',
    points:
      '335,385,336,383,339,382,341,382,344,381,347,381,349,\n  382,349,382,350,382,350,383,350,383,351,383,351,384,352,383,353,383,354,384,355,\n  384,355,386,356,387,356,389,356,392,356,394,356,397,355,400,355,402,350,400,347,\n  399,344,399,341,400,339,401,334,404,334,402,333,398,333,394,334,390,334,386,335,\n  385',
    alt: 'right-foot-wrist-back',
    name: 'right-foot-wrist-back',
  },
  'right-foot-underside-right': {
    shape: 'poly',
    points:
      '344,467,344,467,343,464,342,462,341,459,340,456,340,\n  456,339,454,337,451,336,448,335,445,334,442,333,440,333,440,332,437,332,434,332,\n  431,331,428,331,428,331,426,331,421,332,417,333,412,335,408,336,406,338,404,341,\n  403,343,403,345,402,347,402,349,403,354,405,357,408,359,413,360,415,360,417,360,\n  419,360,420,359,422,359,424,359,427,359,429,360,431,360,433,361,435,361,438,361,\n  438,361,440,361,442,361,445,362,448,362,451,362,454,363,458,363,460,363,462,363,\n  464,363,464,363,467,364,470,364,473,364,474,364,475,363,476,362,477,361,478,359,\n  478,360,480,360,482,359,483,358,484,357,484,354,484,354,486,353,487,353,488,352,\n  488,352,489,350,490,350,485,349,481,348,478,347,475,345,472,344,467',
    alt: 'right-foot-underside-right',
    name: 'right-foot-underside-right',
  },
  'right-foot-underside-left': {
    shape: 'poly',
    points:
      '341,464,342,467,343,469,344,472,345,474,346,476,347,\n  480,347,482,348,484,348,486,348,489,348,491,347,492,346,493,345,494,344,494,344,\n  494,343,494,342,494,341,494,340,495,339,495,338,495,337,495,336,495,334,495,333,\n  494,332,492,331,490,330,488,329,486,328,481,328,476,328,473,328,473,328,472,328,\n  470,329,469,329,466,329,464,329,462,330,460,330,458,330,456,330,455,330,455,331,\n  453,331,452,331,450,332,449,332,448,332,445,334,448,336,451,337,454,338,457,339,\n  461,341,464',
    alt: 'right-foot-underside-left',
    name: 'right-foot-underside-left',
  },
  'right-foot-wrist-joints': {
    shape: 'poly',
    points:
      '541,139,547,142,553,146,557,151,562,155,566,161,569,\n  166,572,172,574,178,575,185,576,191,577,198,577,205,577,213,576,220,573,228,571,\n  235,567,242,562,248,558,254,552,259,546,263,539,267,532,269,524,271,521,271,518,\n  271,514,271,511,271,508,270,505,270,497,268,491,265,485,260,479,256,474,251,470,\n  245,466,239,462,232,460,225,458,218,457,210,457,203,457,195,458,186,460,179,463,\n  171,466,164,470,158,475,152,480,146,487,142,494,138,501,135,510,133,515,133,521,\n  133,526,134,531,135,536,136,541,139',
    alt: 'right-foot-wrist-joints',
    name: 'right-foot-wrist-joints',
  },
  'right-toe-5-medial': {
    shape: 'poly',
    points:
      '453,302,456,305,456,309,455,312,454,315,452,317,448,\n  318,445,319,442,319,440,318,438,317,436,315,435,312,434,310,434,308,435,305,436,\n  303,438,301,442,300,444,299,446,299,448,299,450,300,451,301,453,302',
    alt: 'right-toe-5-medial',
    name: 'right-toe-5-medial',
  },
  'right-toe-4-medial': {
    shape: 'poly',
    points:
      '475,333,478,336,478,340,477,343,477,347,474,349,470,\n  350,467,351,464,351,462,350,459,348,458,346,457,344,456,342,456,339,457,337,458,\n  334,460,332,464,331,466,330,468,330,470,330,472,331,473,332,475,333',
    alt: 'right-toe-4-medial',
    name: 'right-toe-4-medial',
  },
  'right-toe-3-medial': {
    shape: 'poly',
    points:
      '500,337,504,338,507,340,509,342,510,345,511,348,511,\n  351,510,354,509,357,506,359,504,361,501,362,497,362,494,361,492,360,490,358,488,\n  356,487,354,486,351,486,349,486,346,488,344,489,341,491,339,495,337,496,337,497,\n  337,497,337,498,337,499,337,500,337',
    alt: 'right-toe-3-medial',
    name: 'right-toe-3-medial',
  },
  'right-toe-2-medial': {
    shape: 'poly',
    points:
      '538,378,534,380,529,379,526,376,523,374,521,370,520,\n  366,520,362,521,359,522,357,524,354,527,352,530,351,535,350,539,351,542,353,545,\n  355,547,358,547,361,548,365,548,368,546,371,545,374,542,377,538,378',
    alt: 'right-toe-2-medial',
    name: 'right-toe-2-medial',
  },
  'right-toe-1-medial': {
    shape: 'poly',
    points:
      '576,335,579,336,582,336,585,338,587,339,589,341,591,\n  343,594,347,595,352,595,357,594,362,592,367,589,371,587,372,585,374,582,375,579,\n  376,576,376,573,376,568,376,563,373,560,370,557,367,555,362,554,358,554,353,555,\n  349,557,345,558,343,560,341,562,339,564,338,567,336,570,335,571,335,572,335,573,\n  335,574,335,575,335,576,335',
    alt: 'right-toe-1-medial',
    name: 'right-toe-1-medial',
  },
  'right-toe-5-distal': {
    shape: 'poly',
    points:
      '442,354,440,354,437,354,435,352,433,351,432,349,431,\n  347,430,345,430,343,431,341,432,339,434,337,437,335,441,334,444,334,446,336,449,\n  337,450,340,450,342,451,345,451,347,449,349,448,352,445,353,442,354',
    alt: 'right-toe-5-distal',
    name: 'right-toe-5-distal',
  },
  'right-toe-4-distal': {
    shape: 'poly',
    points:
      '471,372,473,375,474,379,474,382,473,384,472,386,471,\n  387,470,389,468,390,466,390,463,391,460,391,458,389,455,388,454,386,453,383,452,\n  381,452,378,453,376,454,373,456,371,460,370,462,369,464,369,466,369,467,370,469,\n  371,471,372',
    alt: 'right-toe-4-distal',
    name: 'right-toe-4-distal',
  },
  'right-toe-3-distal': {
    shape: 'poly',
    points:
      '497,415,494,416,490,416,488,414,486,413,484,410,483,\n  407,482,405,482,401,483,399,484,396,487,393,491,392,495,391,499,392,501,394,504,\n  395,505,398,506,401,506,404,506,407,504,410,503,412,500,414,497,415',
    alt: 'right-toe-3-distal',
    name: 'right-toe-3-distal',
  },
  'right-toe-2-distal': {
    shape: 'poly',
    points:
      '537,406,541,407,544,409,546,411,547,414,548,417,548,\n  420,547,423,546,426,543,428,541,430,538,431,534,431,531,430,529,429,527,427,525,\n  425,524,423,523,420,523,418,523,415,525,413,526,410,528,408,532,406,533,406,534,\n  406,534,406,535,406,536,406,537,406',
    alt: 'right-toe-2-distal',
    name: 'right-toe-2-distal',
  },
  'right-toe-1-distal': {
    shape: 'poly',
    points:
      '580,400,583,400,585,401,587,402,589,403,590,404,592,\n  406,594,409,595,413,595,417,594,421,593,425,590,428,587,431,582,432,577,432,573,\n  432,570,430,567,427,564,425,563,422,562,418,562,415,562,412,564,408,566,405,569,\n  402,574,401,575,400,576,400,577,400,578,400,579,400,580,400',
    alt: 'right-toe-1-distal',
    name: 'right-toe-1-distal',
  },
};

const rightFootMapKeys = Object.keys(rightFootMapParts);

export default {
  name: 'rightFoot',
  image: '/kroppskart/images/rightFoot.png',
  width: 612,
  height: 502,
  keys: rightFootMapKeys,
  parts: rightFootMapParts,
  responsive: rightFootRes,
};
