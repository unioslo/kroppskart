import leftLegRes from './responsive/leftLegResMap';

const leftLegMapParts = {
  'left-groin': {
    shape: 'poly',
    points:
      '144,42,144,42,146,42,148,41,150,41,152,40,152,40,153,\n42,154,46,155,50,156,54,156,58,155,60,154,61,153,62,151,64,149,65,147,67,146,67,\n146,67,145,68,143,70,141,71,139,73,136,75,134,77,131,79,129,81,127,82,126,83,126,\n83,118,90,112,97,105,104,99,112,93,120,88,128,86,126,86,122,86,119,86,115,86,112,\n86,109,86,109,86,106,86,102,86,98,86,92,87,87,87,81,87,75,87,71,87,67,87,64,87,\n64,89,64,91,64,93,64,95,64,97,64,98,63,101,62,104,60,106,58,109,56,111,54,114,53',
    alt: 'left-groin',
    name: 'left-groin',
  },
  'left-thigh-front': {
    shape: 'poly',
    points:
      '159,74,159,74,159,75,159,78,160,80,161,83,161,86,162,\
    88,162,91,163,93,163,96,164,97,164,97,165,105,166,110,166,116,166,121,166,126,166,\
    134,166,134,166,138,166,142,166,145,166,149,166,149,166,153,166,155,166,157,165,\
    159,165,160,164,164,163,172,162,179,161,186,160,192,159,199,157,207,157,207,156,\
    208,156,210,156,212,155,214,155,217,154,219,154,221,154,223,153,225,153,226,153,\
    226,151,222,148,220,145,218,142,216,139,215,136,214,133,214,129,214,126,215,122,\
    217,119,218,116,221,112,224,111,227,109,229,108,231,107,233,105,236,105,236,105,\
    235,104,232,104,230,103,227,102,225,101,222,101,219,100,217,100,214,99,213,99,213,\
    99,213,99,211,99,209,98,206,98,203,97,199,96,196,96,192,95,189,95,187,95,185,95,\
    185,95,185,94,184,94,182,93,180,93,177,92,174,92,171,91,169,91,166,90,164,90,163,\
    90,163,90,163,90,162,90,160,89,158,89,156,89,153,89,151,88,148,88,146,88,144,88,\
    143,88,143,88,141,87,140,87,138,87,136,87,135,88,133,88,132,89,130,90,128,91,126,\
    92,124,94,122,97,117,100,113,102,111,107,105,111,100,115,95,120,91,124,87,128,84,\
    132,81,136,78,140,74,145,71,150,67,155,62,157,64,157,66,158,68,158,69,158,71,159,\
    74',
    alt: 'left-thigh-front #2',
    name: 'left-thigh-front',
    linkedWith: ['left-thigh-back-left', 'left-thigh-back-right'],
  },
  'left-knee-front': {
    shape: 'poly',
    points:
      '136,217,137,217,138,217,140,217,141,217,142,217,143,\n218,147,219,149,222,151,226,153,229,154,233,154,237,154,237,154,239,154,242,154,\n245,155,249,155,253,155,256,155,260,156,263,156,266,156,268,156,268,156,269,156,\n271,156,273,156,275,156,277,156,278,155,281,152,285,149,287,145,290,141,291,138,\n292,134,293,129,293,124,291,122,290,119,289,118,288,116,286,114,285,113,283,113,\n282,113,279,113,277,113,275,113,273,113,271,113,267,113,264,112,261,112,258,111,\n255,110,251,109,250,109,248,108,245,107,243,107,241,107,240,107,239,107,237,107,\n236,108,235,109,234,109,233,111,229,113,226,115,224,118,221,120,219,125,218,127,\n217,129,217,130,217,132,217,134,217,136,217',
    alt: 'left-knee-front',
    name: 'left-knee-front',
  },
  'left-shin-right': {
    points:
      '134,295,137,295,140,293,143,292,146,290,149,289,152,\
    287,152,287,152,288,151,289,151,291,150,293,150,295,149,296,149,298,149,300,148,\
    301,148,302,148,302,148,302,148,303,147,304,147,305,146,307,146,310,144,314,142,\
    320,141,327,139,333,137,339,136,343,135,346,134,348,134,349,134,350,133,351,133,\
    351,133,351,133,352,133,355,132,357,132,360,131,363,131,365,130,368,130,370,129,\
    373,129,374,129,374,129,374,128,377,128,379,127,382,127,384,127,384,127,384,127,\
    385,126,387,126,388,126,390,125,392,125,394,125,396,124,398,124,399,124,400,124,\
    400,124,400,124,398,124,396,124,393,124,391,124,391,124,391,124,390,124,389,123,\
    387,123,385,123,383,122,378,121,372,120,366,119,359,118,353,117,348,117,346,117,\
    344,117,342,116,341,116,340,116,340,116,340,116,336,115,333,114,329,113,325,113,\
    325,113,325,113,324,113,322,113,320,113,317,113,315,112,312,112,309,112,307,112,\
    305,112,304,112,304,112,304,112,300,113,296,113,291,113,287,113,287,116,289,119,\
    291,123,292,127,294,130,295,134,295',
    alt: 'left-shin-right-front',
    name: 'left-shin-right',
    linkedWith: 'left-shin-right-back',
  },
  'left-shin-left': {
    points:
      '159,304,159,304,159,307,160,310,160,312,160,315,160,\
    315,160,315,160,317,159,320,159,323,159,327,158,331,158,335,157,339,157,342,156,\
    345,156,347,156,347,156,347,156,348,156,351,155,353,155,356,154,359,154,361,154,\
    364,153,366,153,369,153,370,153,370,153,370,153,371,152,373,152,375,151,377,151,\
    380,151,382,150,384,150,386,150,388,149,389,149,389,149,389,149,392,148,395,148,\
    397,147,400,147,400,146,399,145,398,143,398,142,398,140,398,138,398,133,399,129,\
    400,127,401,127,401,127,399,128,396,128,393,129,389,130,385,130,380,131,376,131,\
    373,132,370,132,368,132,368,132,368,132,367,133,364,133,362,134,359,134,357,135,\
    354,136,351,136,349,136,346,137,345,137,345,137,345,137,343,138,340,139,338,140,\
    334,141,330,143,326,144,323,145,320,146,317,146,315,146,315,146,315,147,314,147,\
    312,147,311,148,309,149,307,149,304,150,302,150,301,151,299,151,298,151,298,151,\
    298,151,297,152,295,152,294,153,291,154,289,155,287,155,285,156,283,157,281,157,\
    280,157,280,157,280,157,282,157,284,158,286,158,289,158,292,158,295,159,298,159,\
    300,159,303,159,304,159,304',
    alt: 'left-shin-left-front',
    name: 'left-shin-left',
    linkedWith: 'left-shin-left-back',
  },
  'left-foot-wrist': {
    shape: 'poly',
    points:
      '122,419,122,417,122,414,123,411,123,409,124,406,125,\n405,127,403,132,401,136,401,140,401,144,401,147,403,148,404,148,405,149,407,150,\n409,150,411,151,412,152,415,152,416,152,418,152,420,152,422,152,425,152,425,152,\n427,152,429,152,431,152,433,151,435,151,437,149,438,148,439,146,440,145,441,143,\n442,139,443,135,443,131,443,128,442,124,441,120,439,120,439,120,438,121,436,121,\n435,122,433,122,433,120,432,120,430,120,427,120,424,121,421,122,419',
    alt: 'left-foot-wrist',
    name: 'left-foot-wrist',
  },
  'left-foot-overside-right': {
    shape: 'poly',
    points:
      '128,443,128,450,129,456,130,461,132,466,133,471,135,\n477,135,477,135,478,135,480,135,482,135,484,135,486,135,488,135,491,135,492,135,\n494,135,495,135,495,135,495,133,495,131,495,130,494,128,494,128,494,127,495,127,\n496,126,496,126,497,125,497,124,497,123,498,122,497,121,496,120,495,119,493,119,\n492,118,489,118,485,117,483,116,478,116,475,116,473,117,471,117,469,118,464,118,\n464,118,463,118,460,118,458,119,455,119,453,119,450,119,447,120,445,120,442,120,\n441,120,441,120,441,122,442,124,442,126,443,128,443,128,443',
    alt: 'left-foot-overside-right',
    name: 'left-foot-overside-right',
  },
  'left-foot-overside-left': {
    shape: 'poly',
    points:
      '156,463,156,465,156,466,157,467,157,468,157,469,157,\n471,157,471,156,474,156,478,155,481,155,484,155,484,155,484,154,484,153,484,151,\n483,150,483,150,483,148,487,147,488,146,488,145,489,145,489,144,489,143,490,141,\n491,140,493,140,493,140,493,139,493,139,493,138,493,138,493,136,489,136,487,136,\n484,136,481,136,479,136,475,136,475,135,473,135,470,134,468,133,464,132,461,132,\n457,131,453,130,451,129,448,129,446,129,446,134,445,137,445,141,444,145,443,148,\n441,152,437,154,440,155,445,155,450,156,454,156,459,156,463',
    alt: 'left-foot-overside-left',
    name: 'left-foot-overside-left',
  },
  'left-thigh-back': {
    shape: 'poly',
    points:
      '284,115,284,115,284,117,284,118,284,120,284,121,284,\n121,284,121,284,123,284,125,283,127,283,130,283,133,282,136,282,139,282,141,281,\n144,281,145,281,145,281,145,281,148,280,152,280,156,279,161,278,167,278,172,277,\n177,277,181,276,185,276,188,276,188,276,188,275,190,275,192,275,193,274,195,274,\n195,274,195,274,197,273,201,273,204,272,209,272,213,271,218,270,222,270,225,269,\n229,269,231,269,231,262,229,258,228,253,228,249,228,245,228,238,229,237,223,236,\n216,236,209,236,202,236,195,236,189,236,189,236,187,236,183,236,180,236,176,236,\n171,236,167,236,162,236,159,236,155,236,153,236,153,236,153,236,149,236,146,237,\n142,237,138,237,138,237,138,237,136,237,133,237,130,237,126,237,123,238,119,238,\n115,238,112,238,109,238,107,238,107,246,111,253,115,260,116,264,117,267,117,271,\n117,275,117,279,116,284,115',
    alt: 'left-thigh-back',
    name: 'left-thigh-back',
  },
  'left-thigh-back-left': {
    points:
      '227,95,230,99,232,101,234,103,234,104,235,105,235,\
    106,236,108,236,110,236,113,236,113,236,117,235,120,235,124,235,127,235,127,235,\
    127,235,128,235,130,235,132,235,135,235,137,234,140,234,142,234,144,234,146,234,\
    147,234,147,234,147,234,151,234,156,234,160,234,164,234,164,234,164,234,165,234,\
    167,234,170,234,172,234,175,233,178,233,181,233,183,233,185,233,186,233,186,233,\
    186,233,190,234,195,234,197,234,199,234,200,234,202,234,203,234,203,234,203,234,\
    204,234,206,234,208,234,210,234,213,235,215,235,217,235,219,235,221,235,222,235,\
    222,235,223,235,225,235,226,235,228,235,229,235,230,234,231,234,232,233,233,232,\
    234,231,235,230,236,230,229,230,225,230,221,229,216,229,212,228,205,228,205,227,\
    202,226,200,226,197,225,194,225,194,225,194,225,193,225,192,225,190,225,188,224,\
    186,224,181,223,174,223,167,222,160,221,154,221,148,221,146,220,144,220,142,220,\
    141,220,140,220,140,220,140,220,139,220,136,220,134,219,131,219,129,219,126,219,\
    123,219,121,219,118,219,117,219,117,219,117,219,115,219,112,219,108,220,104,220,\
    100,221,95,221,91,221,87,222,84,222,82,222,82,224,85,224,87,225,89,226,91,226,93,\
    227,95',
    alt: 'left-thigh-back-left',
    name: 'left-thigh-back-left',
    linkedWith: ['left-thigh-front', 'left-thigh-back-right'],
  },
  'left-thigh-back-right': {
    points:
      '295,125,295,125,295,126,294,128,294,130,294,133,294,\
    135,293,138,293,140,293,142,292,144,292,145,292,145,292,145,292,147,292,149,291,\
    152,291,155,290,159,290,162,289,165,289,168,288,170,288,172,288,172,288,172,288,\
    174,287,177,287,180,287,183,286,187,285,191,285,195,285,197,284,200,284,202,284,\
    202,284,202,283,205,283,207,282,210,282,212,282,212,282,212,281,214,281,216,280,\
    219,280,222,279,225,279,228,278,232,278,234,277,236,277,238,277,238,277,238,276,\
    236,275,235,274,233,272,232,272,232,272,232,272,229,272,227,272,224,272,222,272,\
    222,272,222,273,221,273,219,273,218,273,215,274,213,274,211,274,209,275,207,275,\
    205,275,204,275,204,275,204,275,202,276,200,276,197,277,194,277,190,278,187,278,\
    183,279,180,279,178,280,176,280,176,280,176,280,174,280,170,281,166,281,161,282,\
    156,282,151,283,146,283,142,284,139,284,136,284,136,284,136,284,135,284,133,285,\
    131,285,128,285,125,285,122,286,120,286,117,286,115,286,114,286,114,286,114,288,\
    113,290,112,293,110,295,109,295,109,296,112,296,114,296,117,296,120,295,122,295,\
    125',
    alt: 'left-thigh-back-right',
    name: 'left-thigh-back-right',
    linkedWith: ['left-thigh-front', 'left-thigh-back-left'],
  },
  'left-knee-back': {
    shape: 'poly',
    points:
      '276,242,276,244,275,247,274,251,273,255,272,259,272,\n263,272,263,272,265,273,267,273,270,273,273,274,276,274,279,275,283,275,285,276,\n287,276,289,276,289,276,290,276,292,276,293,276,295,276,296,276,297,274,300,270,\n302,266,304,261,306,256,308,253,308,249,309,243,308,239,305,234,303,230,299,229,\n295,228,294,228,293,228,292,228,290,228,289,228,288,228,288,228,285,228,282,229,\n278,229,273,229,268,229,262,230,257,230,253,230,250,230,247,230,247,230,241,231,\n238,233,235,235,233,238,231,244,230,249,230,256,230,263,231,266,232,269,233,271,\n235,274,237,275,239,276,242',
    alt: 'left-knee-back',
    name: 'left-knee-back',
  },
  'left-shin-right-back': {
    shape: 'poly',
    points:
      '277,300,276,313,273,327,270,341,267,354,264,368,264,\n380,263,380,263,379,263,379,262,379,262,378,262,378,261,376,261,373,262,369,262,\n365,263,362,263,360,263,360,264,359,264,357,264,356,264,353,264,351,264,349,265,\n347,265,345,265,343,265,342,265,342,265,338,266,334,266,332,266,329,266,327,266,\n324,266,322,266,320,265,317,265,315,265,311,264,307,264,307,265,307,266,306,267,\n305,269,304,271,304,272,303,274,302,275,301,276,300,277,300,277,300',
    alt: 'left-shin-right #1',
    name: 'left-shin-right-back',
    linkedWith: 'left-shin-right',
  },
  'left-shin-left-back': {
    shape: 'poly',
    points:
      '236,306,236,306,237,307,239,308,240,309,241,310,241,\n310,241,310,241,312,241,314,241,315,241,317,241,317,241,317,241,321,241,325,240,\n329,240,333,240,333,240,333,240,335,240,338,241,340,241,342,241,342,241,342,241,\n343,241,345,241,347,241,350,242,352,242,355,242,357,242,359,242,361,242,362,242,\n362,242,362,242,363,242,365,242,367,243,369,243,372,243,374,243,376,243,378,243,\n380,243,381,243,381,241,379,240,374,239,370,238,366,237,361,236,358,234,351,233,\n346,232,341,231,336,230,333,229,329,229,325,228,321,228,317,228,312,228,306,228,\n299,228,299,230,301,232,302,234,304,236,306,236,306',
    alt: 'left-shin-left #1',
    name: 'left-shin-left',
    linkedWith: 'left-shin-left',
  },
  'left-shin-back': {
    shape: 'poly',
    points:
      '262,308,263,316,264,325,264,333,263,341,263,350,262,\n358,262,358,262,359,261,361,261,363,261,366,260,369,260,371,260,374,259,376,259,\n378,259,379,259,379,256,378,254,378,253,378,251,378,249,378,246,379,246,379,246,\n376,245,372,245,367,245,361,244,355,244,349,243,343,243,339,242,334,242,331,242,\n331,242,331,242,330,242,328,243,326,243,323,243,320,243,317,244,315,244,312,244,\n310,244,309,244,309,248,310,251,310,253,310,255,310,258,309,262,308',
    alt: 'left-shin-back',
    name: 'left-shin-back',
  },
  'left-foot-wrist-back': {
    shape: 'poly',
    points:
      '264,382,264,382,264,383,264,385,264,387,264,390,265,\n393,265,395,265,398,265,400,265,402,265,403,265,403,260,400,257,399,254,398,253,\n398,251,398,250,399,248,399,246,400,243,401,243,401,243,400,243,398,243,397,243,\n394,243,392,242,390,242,388,242,386,242,384,242,383,242,383,247,381,250,380,253,\n380,256,380,259,381,264,382',
    alt: 'left-foot-wrist-back',
    name: 'left-foot-wrist-back',
  },
  'left-foot-underside-left': {
    shape: 'poly',
    points:
      '240,482,240,482,239,480,239,479,238,478,237,477,237,\n477,237,477,236,476,235,475,235,475,234,474,234,473,234,473,234,472,234,470,234,\n469,235,467,235,464,235,462,235,460,235,459,236,457,236,456,236,456,236,456,236,\n455,236,453,236,452,236,450,236,448,237,445,237,443,237,442,237,440,237,439,237,\n439,237,439,238,437,238,435,238,432,239,430,239,430,239,430,239,427,239,424,239,\n421,239,418,239,418,239,414,240,409,243,406,244,404,245,403,247,402,249,401,251,\n401,254,401,259,402,261,404,263,406,264,409,265,412,266,416,266,416,266,418,267,\n420,267,423,267,425,267,425,268,426,267,429,266,433,266,437,265,441,264,442,264,\n442,263,445,262,448,261,450,259,453,259,453,259,453,258,456,257,459,256,462,255,\n465,255,465,253,470,252,473,250,476,249,480,248,483,248,489,248,489,246,487,244,\n485,242,483,240,482,240,482',
    alt: 'left-foot-underside-left',
    name: 'left-foot-underside-left',
  },
  'left-foot-underside-right': {
    shape: 'poly',
    points:
      '270,477,270,479,269,483,268,486,267,489,266,492,264,\n493,262,494,261,494,259,494,257,494,255,493,251,493,250,487,251,482,252,477,253,\n472,256,467,258,462,258,462,259,460,260,457,261,455,262,452,262,452,262,450,263,\n449,263,448,264,447,264,446,265,444,266,447,268,454,269,460,270,467,270,473,270,\n477',
    alt: 'left-foot-underside-right',
    name: 'left-foot-underside-right',
  },
  'left-foot-wrist-joints': {
    shape: 'poly',
    points:
      '523,139,530,142,536,145,542,149,547,153,552,158,556,\n164,560,169,563,176,565,182,567,189,568,195,569,202,569,209,569,216,568,223,566,\n230,564,237,561,243,558,249,555,255,550,260,545,265,539,269,533,273,530,274,527,\n275,524,276,521,277,517,278,514,279,510,279,506,279,501,279,497,278,493,277,489,\n276,481,273,475,270,469,265,464,260,459,255,456,248,452,242,449,235,448,228,446,\n221,445,213,445,206,445,198,446,190,449,182,451,174,455,167,460,161,465,155,470,\n150,477,146,484,142,492,139,500,137,504,137,508,137,512,137,515,137,519,138,523,\n139',
    alt: 'left-foot-wrist-joints',
    name: 'left-foot-wrist-joints',
  },
  'left-toe-1-medial': {
    shape: 'poly',
    points:
      '464,347,466,350,468,353,468,356,469,360,469,363,468,\n366,467,370,466,373,463,375,461,378,457,380,453,381,448,382,443,381,439,379,436,\n377,433,373,431,370,429,366,429,362,429,358,430,354,432,350,435,346,437,345,438,\n344,440,343,441,342,443,342,445,341,449,341,452,341,455,342,458,343,461,344,464,\n347',
    alt: 'left-toe-1-medial',
    name: 'left-toe-1-medial',
  },
  'left-toe-2-medial': {
    shape: 'poly',
    points:
      '492,357,497,358,500,360,502,363,504,365,505,369,505,\n372,504,376,503,379,500,382,497,384,494,385,489,385,485,384,482,383,480,381,478,\n378,477,376,476,373,476,370,476,367,478,364,480,361,483,359,487,357,488,357,489,\n357,489,357,490,357,491,357,492,357',
    alt: 'left-toe-2-medial',
    name: 'left-toe-2-medial',
  },
  'left-toe-3-medial': {
    shape: 'poly',
    points:
      '529,341,533,342,536,344,538,347,540,349,541,353,541,\n356,540,360,539,363,536,366,534,368,530,369,526,369,523,368,520,367,518,365,516,\n363,515,360,514,357,514,354,514,351,516,348,517,345,520,343,524,341,525,341,526,\n341,526,341,527,341,528,341,529,341',
    alt: 'left-toe-3-medial',
    name: 'left-toe-3-medial',
  },
  'left-toe-4-medial': {
    shape: 'poly',
    points:
      '560,334,564,335,566,337,568,339,570,341,570,345,570,\n347,569,350,568,353,566,355,564,357,561,358,557,358,554,357,552,356,550,354,549,\n353,548,350,547,348,547,345,547,343,548,340,550,338,552,336,555,334,556,334,557,\n334,557,334,558,334,559,334,560,334',
    alt: 'left-toe-4-medial',
    name: 'left-toe-4-medial',
  },
  'left-toe-5-medial': {
    shape: 'poly',
    points:
      '583,325,580,326,578,326,575,325,573,324,572,322,571,\n319,570,317,570,315,571,313,572,310,574,308,577,307,581,306,584,307,586,308,588,\n309,589,311,590,314,590,316,590,319,589,321,588,323,586,325,583,325',
    alt: 'left-toe-5-medial',
    name: 'left-toe-5-medial',
  },
  'left-toe-1-distal': {
    shape: 'poly',
    points:
      '460,411,462,413,463,416,464,419,464,421,464,424,463,\n427,462,429,461,431,459,433,457,435,454,437,451,437,447,438,443,438,440,437,437,\n435,435,433,433,430,431,428,430,424,430,421,430,418,431,414,434,411,435,410,436,\n408,438,408,439,407,441,406,443,406,446,405,449,405,452,406,455,407,458,408,460,\n411',
    alt: 'left-toe-1-distal',
    name: 'left-toe-1-distal',
  },
  'left-toe-2-distal': {
    shape: 'poly',
    points:
      '491,411,495,412,499,414,500,416,502,419,503,422,503,\n425,502,429,501,432,498,434,496,436,492,437,488,437,485,436,482,435,480,433,478,\n431,476,428,476,426,476,423,476,420,478,418,479,415,482,413,486,411,487,411,488,\n411,488,411,489,411,490,411,491,411',
    alt: 'left-toe-2-distal',
    name: 'left-toe-2-distal',
  },
  'left-toe-3-distal': {
    shape: 'poly',
    points:
      '541,402,544,405,545,409,543,413,542,416,539,419,535,\n420,531,422,526,421,523,418,521,417,520,416,519,414,518,412,518,410,518,408,519,\n405,520,404,521,402,523,401,525,400,527,399,530,398,532,398,534,398,537,399,539,\n400,541,402',
    alt: 'left-toe-3-distal',
    name: 'left-toe-3-distal',
  },
  'left-toe-4-distal': {
    shape: 'poly',
    points:
      '572,378,574,380,575,384,575,388,574,390,573,391,572,\n393,571,394,569,396,567,396,564,397,560,397,558,396,555,395,553,392,552,390,551,\n387,551,385,552,382,553,379,555,377,559,375,561,374,564,374,566,374,568,375,570,\n376,572,378',
    alt: 'left-toe-4-distal',
    name: 'left-toe-4-distal',
  },
  'left-toe-5-distal': {
    shape: 'poly',
    points:
      '587,360,584,361,581,361,579,359,576,358,575,356,574,\n353,573,351,573,348,574,345,575,343,577,340,581,339,585,338,588,339,590,340,593,\n342,594,344,595,347,595,350,595,353,594,355,592,357,590,359,587,360',
    alt: 'left-toe-5-distal',
    name: 'left-toe-5-distal',
  },
};

const leftLegMapKeys = Object.keys(leftLegMapParts);

const mapInfo = {
  name: 'leftLeg',
  image: '/kroppskart/images/leftLeg.png',
  width: 612,
  height: 502,
  keys: leftLegMapKeys,
  parts: leftLegMapParts,
  responsive: leftLegRes,
};

export default mapInfo;
