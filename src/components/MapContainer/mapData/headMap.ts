import { MapParts } from './mapType';
import headRes from './responsive/headResMap';

const headMapParts: MapParts = {
  'right-back-head': {
    shape: 'poly',
    points:
      '32,186,32,186,32,185,31,184,31,183,30,181,29,179,\
    27,176,25,170,23,165,20,160,18,155,16,151,15,149,15,147,14,146,14,145,13,144,13,\
    144,12,139,10,130,8,121,7,117,6,112,6,108,5,104,5,100,5,98,5,90,6,81,9,73,12,65,\
    15,58,20,50,25,43,31,37,37,31,44,26,51,21,58,17,65,14,72,11,78,9,85,7,92,6,100,\
    6,100,6,100,8,100,11,99,14,99,17,99,21,98,25,98,29,98,31,97,34,97,36,97,36,97,\
    36,97,37,97,38,97,40,97,42,96,45,96,50,95,57,95,64,94,71,93,78,93,83,92,86,92,88,\
    92,90,92,91,92,92,92,92,92,92,92,94,91,98,91,102,90,106,90,111,89,116,89,121,89,\
    124,88,128,88,130,88,130,86,130,85,130,83,130,81,130,80,130,78,131,76,131,74,132,\
    73,134,71,135,70,136,69,138,65,143,64,148,65,153,66,158,68,163,71,168,71,168,71,\
    169,72,170,73,172,73,174,74,176,75,177,76,179,77,181,78,182,78,183,78,183,79,185,\
    80,187,82,189,83,191,85,192,86,194,89,196,93,197,96,197,100,198,103,198,104,200,\
    105,200,105,202,105,204,106,206,106,208,106,209,96,207,88,204,80,202,76,201,72,201,\
    68,201,63,201,58,202,53,203,50,204,48,205,46,206,44,207,42,209,40,210,40,204,39,\
    201,38,197,36,194,34,191,32,186',
    name: 'right-back-head',
    alt: 'Bakhode, høyre side',
  },
  'right-front-head': {
    shape: 'poly',
    points:
      '171,33,174,35,177,38,180,41,183,44,186,47,188,50,192,\
    56,194,61,196,66,198,72,199,77,201,84,201,88,202,92,203,95,203,98,204,100,204,102,\
    204,105,204,107,204,110,204,113,203,116,202,121,198,119,195,118,193,116,190,114,\
    186,113,182,112,176,111,171,112,166,113,162,115,158,117,155,120,152,124,150,128,\
    148,133,146,137,145,143,145,148,145,148,143,147,139,147,136,146,131,145,127,144,\
    122,143,117,142,114,141,110,140,108,140,108,140,105,139,102,138,99,137,96,136,94,\
    134,92,132,90,130,90,128,90,126,90,124,90,122,91,120,91,120,91,119,91,117,91,115,\
    92,112,92,110,92,107,92,104,93,102,93,100,93,99,93,99,93,99,93,98,93,97,93,95,93,\
    93,94,90,94,85,95,78,96,71,96,64,97,57,97,52,98,49,98,47,98,45,98,44,98,43,98,43,\
    98,43,98,41,99,37,99,34,100,29,100,25,101,20,101,15,101,12,102,8,102,6,102,6,109,\
    6,115,7,121,8,127,9,133,11,139,13,150,18,161,24,171,33',
    name: 'right-front-head',
    alt: 'Pannebrask, høyre side',
  },
  'right-eye': {
    shape: 'poly',
    points:
      '193,118,194,118,196,119,197,120,198,121,199,122,200,\
    123,200,124,200,127,199,130,198,133,197,136,196,138,196,141,196,144,196,146,197,\
    149,197,150,198,152,198,154,198,155,197,156,196,157,194,158,191,159,191,159,190,\
    159,188,160,187,160,186,160,186,160,182,161,176,161,171,160,166,159,161,158,157,\
    157,155,156,154,155,152,154,150,153,149,152,148,150,147,148,147,146,147,144,147,\
    141,148,139,149,137,151,131,153,125,156,121,158,119,160,118,162,116,165,115,167,\
    114,171,113,175,113,179,113,182,114,186,115,190,116,193,118',
    name: 'right-eye',
    alt: 'Høyre øye',
  },
  'right-ear': {
    shape: 'poly',
    points:
      '97,180,98,181,98,184,98,187,97,190,96,193,94,194,\
    91,195,88,194,85,191,83,188,81,184,80,182,80,182,79,181,79,180,78,178,77,176,76,\
    175,75,173,74,171,74,169,73,168,73,167,73,167,71,162,68,157,68,153,67,148,68,143,\
    71,138,74,135,76,134,79,133,81,132,84,132,87,133,90,134,92,135,94,137,96,139,98,\
    142,99,145,99,147,99,149,99,151,98,152,98,154,97,156,97,156,95,157,93,157,92,158,\
    90,160,92,161,92,161,92,162,92,163,92,165,93,167,93,169,94,173,96,178,97,180',
    name: 'right-ear',
    alt: 'Høyre øre',
  },
  'right-nose': {
    shape: 'poly',
    points:
      '142,149,145,150,147,152,149,153,151,155,153,157,157,\
    158,161,160,167,161,173,162,180,163,186,162,190,161,192,161,194,160,195,159,197,\
    158,198,157,200,156,201,159,203,162,204,164,206,166,207,168,209,171,210,172,211,\
    173,211,175,212,176,212,178,212,179,211,182,209,184,205,186,202,187,199,188,197,\
    190,196,191,195,194,195,198,195,202,195,205,194,207,193,209,192,209,191,208,189,\
    208,187,207,185,207,183,207,179,207,176,206,173,206,169,206,167,205,167,205,165,\
    205,161,205,157,204,152,203,148,203,143,202,138,201,134,201,130,200,128,200,128,\
    200,127,200,121,199,116,198,113,198,111,198,109,197,107,197,106,197,106,197,106,\
    197,104,197,102,197,99,196,97,196,97,196,98,194,99,191,99,189,100,187,100,185,100,\
    182,99,180,97,176,96,172,94,168,93,164,93,162,93,160,94,159,96,158,97,158,99,157,\
    100,155,101,152,102,150,101,147,101,144,100,142,99,139,99,139,102,140,106,141,110,\
    142,115,143,121,144,126,146,131,147,135,148,139,149,142,149,142,149',
    name: 'right-nose',
    alt: 'Høyre nese',
  },
  'right-jaw': {
    shape: 'poly',
    points:
      '146,204,148,204,151,205,155,205,158,205,163,206,167,\
    206,171,207,175,207,179,208,182,208,185,208,187,208,188,209,190,209,191,210,192,\
    210,193,211,194,212,195,214,193,217,191,220,189,223,186,226,186,229,185,231,185,\
    233,186,235,186,237,186,239,186,242,184,247,181,250,177,253,173,255,168,256,163,\
    256,157,256,152,254,148,252,143,250,139,247,134,244,130,242,125,239,121,236,117,\
    233,113,229,111,224,110,221,109,217,108,212,108,207,108,202,108,199,108,199,110,\
    199,114,200,118,200,122,201,127,202,132,202,137,203,140,203,144,204,146,204,146,\
    204',
    name: 'right-jaw',
    alt: 'Høyre kjeve',
  },
  'left-front-head': {
    shape: 'poly',
    points:
      '299,86,300,80,300,75,302,71,303,66,305,62,308,56,311,\
    51,313,48,315,46,317,43,320,40,324,37,329,32,335,28,341,24,346,20,352,17,358,14,\
    364,11,370,9,377,8,384,7,391,6,398,6,398,6,398,9,399,13,399,17,399,22,400,27,400,\
    32,401,38,401,41,402,45,402,48,402,48,402,48,402,51,403,55,403,60,404,66,404,72,\
    405,77,405,83,406,88,406,92,406,95,406,95,406,95,406,97,407,99,407,102,407,105,408,\
    108,408,111,408,115,409,117,409,119,409,121,409,121,409,122,409,124,409,126,410,\
    128,410,129,409,130,408,133,405,135,402,136,400,137,397,138,394,139,394,139,392,\
    139,388,140,384,141,379,142,375,143,370,145,365,146,361,147,357,147,355,148,355,\
    148,354,143,353,139,352,135,350,130,348,126,346,123,344,119,341,116,337,114,333,\
    113,329,112,323,112,317,112,313,113,310,115,306,116,303,118,298,121,296,114,295,\
    109,295,103,296,98,297,93,299,86',
    name: 'left-front-head',
    alt: 'Pannebrask, venstre side',
  },
  'left-back-head': {
    shape: 'poly',
    points:
      '442,18,447,21,453,24,458,27,463,31,468,35,472,40,478,\
    47,484,57,488,67,492,77,495,87,495,97,495,97,494,98,494,101,494,103,494,106,493,\
    109,493,111,492,114,492,116,492,119,492,120,492,120,491,125,490,130,489,135,488,\
    139,486,144,484,149,484,149,483,151,482,155,480,158,478,163,476,168,474,172,472,\
    177,470,180,469,184,468,186,468,186,466,190,464,194,462,198,460,201,459,205,459,\
    210,457,209,455,207,453,206,451,205,448,204,446,203,441,202,437,201,432,201,428,\
    201,424,201,420,202,411,204,403,207,394,209,394,208,394,206,394,204,394,202,394,\
    200,395,200,396,198,399,198,403,197,406,197,410,197,413,195,416,192,419,187,422,\
    182,425,177,427,171,429,167,430,165,432,162,433,160,434,157,434,155,435,152,435,\
    148,434,144,432,140,430,137,428,134,424,132,421,130,418,130,416,130,413,130,412,\
    129,411,127,411,127,411,125,411,121,410,118,410,113,410,109,409,104,409,100,408,\
    97,408,93,408,91,408,91,408,91,408,90,407,87,407,85,407,82,406,78,406,70,405,59,\
    403,49,402,38,401,27,400,19,400,15,400,12,399,10,399,7,399,6,399,6,406,6,414,7,421,\
    9,428,11,436,14,442,18',
    name: 'left-back-head',
    alt: 'Bakhode, venstre side',
  },
  'left-eye': {
    shape: 'poly',
    points:
      '351,136,351,138,352,140,352,143,353,146,353,148,352,\
    150,351,153,347,155,343,156,339,158,335,159,332,160,328,160,323,161,317,161,314,\
    161,312,160,309,160,307,159,305,158,304,157,301,154,302,153,302,150,303,148,304,\
    145,304,142,304,142,303,141,303,139,303,138,302,135,302,133,301,131,300,129,300,\
    127,300,125,299,124,299,124,300,123,301,121,302,120,304,119,306,118,308,117,313,\
    115,317,114,320,113,324,113,328,113,331,114,335,115,338,116,340,118,342,120,345,\
    122,346,125,348,129,349,132,351,136',
    name: 'left-eye',
    alt: 'Venstre øye',
  },
  'left-nose': {
    shape: 'poly',
    points:
      '309,161,313,162,320,162,326,162,333,161,339,160,343,\
    158,347,157,349,155,351,153,352,152,354,150,357,150,357,150,360,149,364,148,368,\
    147,374,146,379,144,385,143,390,142,394,141,398,140,401,139,401,139,400,142,399,\
    144,398,147,398,150,398,152,400,155,401,157,403,157,404,158,405,159,406,160,406,\
    162,407,165,405,169,404,172,402,175,401,179,400,181,400,183,400,186,400,189,401,\
    191,401,194,402,196,402,196,400,196,397,197,395,197,392,197,392,197,392,197,391,\
    197,390,197,388,198,386,198,384,198,379,199,372,200,366,201,359,202,352,202,347,\
    203,345,203,343,204,341,204,340,204,339,204,339,204,338,204,335,205,332,205,329,\
    206,326,206,322,207,319,207,315,207,312,208,310,208,307,208,306,207,305,206,304,\
    208,304,208,304,208,304,208,304,207,305,205,305,203,305,199,305,198,305,196,304,\
    195,304,193,304,191,302,190,301,188,297,187,294,186,292,185,290,184,289,183,288,\
    181,287,180,287,178,287,177,288,176,289,174,290,172,291,170,292,168,295,164,298,\
    160,299,157,299,157,302,158,304,159,307,160,309,161,309,161',
    name: 'left-nose',
    alt: 'Venstre nese',
  },
  'left-ear': {
    shape: 'poly',
    points:
      '430,140,431,142,431,144,432,146,432,149,432,151,432,\
    153,432,156,431,159,430,162,428,165,427,168,425,171,424,174,422,177,421,180,419,\
    184,417,187,416,189,414,191,412,193,409,194,407,195,404,195,403,191,401,188,400,\
    185,400,182,401,180,402,177,405,176,406,175,408,172,408,169,409,165,408,162,407,\
    159,404,158,403,157,402,157,401,156,401,156,401,156,399,151,399,147,401,143,403,\
    140,406,137,409,135,413,133,417,132,420,133,424,133,427,136,430,140',
    name: 'left-ear',
    alt: 'Venstre øre',
  },
  'left-jaw': {
    shape: 'poly',
    points:
      '388,224,386,229,383,233,379,236,376,238,372,241,367,\
    244,361,247,354,252,346,254,343,255,339,256,335,256,331,256,328,255,324,253,323,\
    253,322,252,321,252,321,251,320,251,319,250,315,247,314,243,314,239,314,236,315,\
    232,314,228,313,225,309,222,307,219,306,217,305,216,305,214,305,213,306,211,307,\
    210,312,208,315,208,317,208,319,208,321,209,322,208,322,208,324,208,327,208,330,\
    207,334,207,338,206,342,206,346,205,349,205,352,204,354,204,354,204,354,204,356,\
    204,360,203,364,203,368,202,373,202,378,201,383,200,386,200,390,199,392,199,392,\
    199,392,202,392,207,391,212,390,217,390,222,388,224',
    name: 'left-jaw',
    alt: 'Venstre kjeve',
  },
  'right-jaw-joint': {
    shape: 'poly',
    points:
      '82,408,85,409,87,409,89,411,91,412,93,413,94,415,\
    96,419,97,423,97,428,96,432,95,436,92,439,90,441,88,442,86,443,84,444,82,444,79,\
    444,75,443,71,441,69,438,66,436,65,432,64,428,64,424,64,420,67,416,69,413,72,410,\
    77,408,78,408,79,408,79,408,80,408,81,408,82,408',
    name: 'right-jaw-joint',
    alt: 'Høyre kjeveledd',
  },
  'right-upper-gum': {
    shape: 'poly',
    points:
      '134,463,138,464,143,465,149,466,154,466,160,467,164,\
    467,167,467,171,467,174,468,177,468,179,470,180,474,180,474,178,474,176,474,173,\
    474,171,474,171,474,171,474,168,474,165,475,161,475,158,475,158,475,158,475,157,\
    475,155,475,153,474,151,474,149,474,146,473,144,473,142,472,140,472,139,472,139,\
    472,139,472,136,471,134,470,131,469,128,469,128,469,128,469,126,468,125,468,123,\
    468,121,468,121,468,118,467,117,466,116,466,115,465,114,465,110,466,110,466,111,\
    464,112,462,113,459,114,457,114,457,114,457,115,457,117,458,119,459,122,459,124,\
    460,127,461,129,462,131,462,133,463,134,463,134,463',
    name: 'right-upper-gum',
    alt: 'Tannkjøtt i overkjeve, høyre side',
  },
  'right-upper-teeth': {
    shape: 'poly',
    points:
      '113,467,114,466,116,466,117,467,118,467,120,468,121,\
    468,123,469,124,469,125,469,126,469,127,469,128,469,128,469,129,470,131,470,132,\
    471,133,471,133,471,133,471,135,471,137,472,139,472,142,473,146,473,149,474,152,\
    474,154,475,156,475,158,475,158,475,158,475,161,475,164,475,166,475,169,475,169,\
    475,170,475,173,475,175,475,178,475,180,475,181,476,183,477,184,480,185,484,185,\
    487,185,490,183,491,180,492,176,492,172,492,167,491,163,490,160,490,154,489,152,\
    489,150,488,149,487,148,486,146,485,146,485,145,485,144,485,142,485,141,484,141,\
    484,141,484,140,484,139,484,137,483,135,483,133,482,131,481,129,481,128,480,126,\
    480,125,480,125,480,124,479,123,478,122,478,121,477,120,477,119,476,118,476,117,\
    476,116,476,114,476,113,476,112,476,112,475,111,473,111,471,111,469,111,467,113,\
    467',
    name: 'right-upper-teeth',
    alt: 'Tenner i overkjeve, høyre side',
  },
  'right-lower-teeth': {
    shape: 'poly',
    points:
      '130,484,130,484,132,485,133,486,135,487,136,488,136,\
    488,136,488,139,489,142,489,144,490,147,490,147,490,147,490,149,491,151,492,152,\
    492,154,493,154,493,155,493,157,494,159,495,161,495,163,496,164,496,165,496,167,\
    496,168,496,170,496,172,496,172,497,173,498,174,500,174,502,174,503,173,504,172,\
    505,171,505,170,506,167,506,159,506,152,504,145,502,138,499,131,496,124,493,122,\
    492,119,491,116,490,113,489,111,488,110,486,109,484,109,483,110,481,110,479,111,\
    477,112,476,112,476,113,477,115,477,117,478,119,479,121,480,123,481,126,482,127,\
    483,129,484,130,484,130,484',
    name: 'right-lower-teeth',
    alt: 'Tenner i underkjeve, høyre side',
  },
  'right-lower-gum': {
    shape: 'poly',
    points:
      '125,495,125,495,128,496,131,497,134,498,137,499,137,\
    499,137,499,138,500,139,501,141,502,142,502,142,502,142,502,144,503,146,503,148,\
    504,151,504,155,505,158,506,161,507,163,507,165,508,167,508,167,508,166,510,165,\
    512,164,512,163,513,161,514,160,514,157,514,153,513,150,512,150,512,148,511,145,\
    510,142,509,138,507,135,506,131,504,127,503,124,502,121,500,119,500,119,500,118,\
    499,116,498,113,497,111,496,109,495,109,494,108,493,107,492,107,491,107,490,107,\
    488,107,487,107,487,108,487,110,488,112,489,114,490,116,491,118,492,121,493,122,\
    493,124,494,125,495,125,495',
    name: 'right-lower-gum',
    alt: 'Tannkjøtt i underkjeve, høyre side',
  },
  'left-jaw-joint': {
    shape: 'poly',
    points:
      '407,417,409,419,410,422,410,425,410,428,410,430,409,\
    433,408,435,406,438,404,440,402,441,400,443,397,443,392,445,387,444,384,441,380,\
    439,378,435,377,431,376,427,376,423,378,419,379,417,380,415,382,413,384,412,386,\
    410,389,410,393,409,396,409,399,410,402,411,405,414,407,417',
    name: 'left-jaw-joint',
    alt: 'Venstre kjeveledd',
  },
  'left-upper-gum': {
    shape: 'poly',
    points:
      '317,475,315,475,313,475,310,475,308,475,305,474,303,\
    474,302,474,300,474,298,474,296,474,296,474,295,473,295,472,295,472,295,471,296,\
    469,299,468,302,468,306,468,309,467,311,467,311,467,313,467,315,466,318,466,321,\
    466,325,465,328,465,331,464,334,464,336,464,338,464,338,464,338,464,339,463,341,\
    463,344,462,346,461,349,460,352,459,355,459,357,458,359,457,360,457,360,457,360,\
    457,361,459,362,462,362,464,363,466,363,466,360,465,359,465,357,466,356,466,355,\
    467,352,468,350,468,348,468,347,468,345,468,344,469,342,471,339,471,334,472,329,\
    473,325,474,320,475,317,475',
    name: 'left-upper-gum',
    alt: 'Tannkjøtt i overkjeve, venstre side',
  },
  'left-upper-teeth': {
    shape: 'poly',
    points:
      '303,475,303,475,306,475,310,476,313,476,316,476,316,\
    476,316,476,317,476,319,476,320,476,321,475,321,475,321,475,322,475,324,475,326,\
    474,328,474,330,473,332,473,335,472,336,472,338,472,339,472,339,472,339,472,341,\
    471,343,470,344,470,346,469,346,469,346,469,348,469,350,469,351,469,353,469,353,\
    469,353,469,355,468,356,468,358,467,360,466,360,466,362,466,363,467,363,468,364,\
    469,364,470,364,472,363,473,362,474,361,475,360,475,358,476,357,476,357,476,356,\
    476,355,477,353,477,352,478,350,479,348,479,346,480,345,480,344,481,343,481,343,\
    481,343,481,342,482,341,482,339,482,337,483,335,483,333,484,331,485,330,485,328,\
    485,327,486,327,486,326,486,325,487,324,487,324,488,323,489,322,489,321,490,318,\
    490,315,490,312,490,309,491,308,491,305,491,304,491,302,492,300,493,298,493,295,\
    493,292,493,291,492,290,491,289,489,289,488,289,486,289,482,291,478,292,475,292,\
    475,295,475,298,475,300,475,303,475,303,475',
    name: 'left-upper-teeth',
    alt: 'Tenner i overkjeve, venstre side',
  },
  'left-lower-teeth': {
    shape: 'poly',
    points:
      '302,498,303,497,304,496,306,496,308,496,310,496,311,\
    496,311,496,313,495,316,494,318,494,321,493,321,493,321,493,322,492,324,492,325,\
    491,326,491,326,491,326,491,329,490,332,489,336,488,339,487,339,487,339,487,339,\
    487,339,487,339,487,340,487,340,487,340,487,341,486,343,485,344,484,346,483,346,\
    483,347,482,350,481,353,480,356,479,359,478,360,478,362,478,364,479,364,481,365,\
    482,365,485,364,487,362,489,359,491,356,492,352,493,349,494,346,495,346,495,345,\
    496,343,497,342,497,340,498,338,499,335,500,333,501,332,502,330,502,329,503,329,\
    503,325,505,321,505,317,506,312,506,308,506,303,508,302,507,301,505,300,503,300,\
    501,300,499,302,498',
    name: 'left-lower-teeth',
    alt: 'Tenner i underkjeve, venstre side',
  },
  'left-lower-gum': {
    shape: 'poly',
    points:
      '317,506,321,505,325,504,327,503,330,503,332,502,334,\
    501,335,501,337,500,340,499,342,498,345,496,349,495,353,493,355,491,358,490,360,\
    489,362,488,367,487,367,489,367,491,367,492,366,494,366,495,365,495,363,497,360,\
    497,356,499,356,499,354,500,351,501,348,502,344,504,340,506,335,507,331,509,328,\
    510,325,512,323,512,323,512,320,513,316,514,313,514,311,514,308,512,307,508,310,\
    508,311,507,312,507,314,507,315,506,317,506',
    name: 'left-lower-gum',
    alt: 'Tannkjøtt i underkjeve, venstre side',
  },
  // See http://www.outsharked.com/imagemapster/test/shapes2.html for a possible solutiuon for highlighting lips as one region
  // lips: {
  //   shape: 'poly',
  //   points:
  //     '566,567,564,566,561,565,557,563,553,561,550,560,548,\
  //      559,545,557,539,554,534,549,529,545,524,541,522,538,520,536,519,534,518,532,517,\
  //      530,516,527,515,525,513,522,512,520,511,518,510,517,509,515,508,511,508,511,508,\
  //      510,507,509,507,507,506,505,505,504,505,502,504,500,503,498,503,497,503,496,503,\
  //      496,502,486,502,474,502,463,503,452,504,442,507,432,507,432,508,430,509,427,510,\
  //      425,511,422,511,422,511,422,512,420,512,418,513,416,514,414,514,414,514,414,515,\
  //      412,516,410,518,408,519,406,519,406,521,402,522,400,524,397,526,394,527,391,531,\
  //      388,532,386,535,383,539,380,542,377,546,375,548,374,548,374,550,372,552,371,555,\
  //      369,557,368,557,368,558,367,560,367,561,366,562,366,564,365,565,365,565,365,566,\
  //      365,568,365,570,366,572,366,575,366,577,366,579,367,581,367,583,367,584,367,584,\
  //      367,588,367,589,366,591,366,593,365,596,365,602,365,608,365,613,366,618,369,623,\
  //      371,628,374,632,378,636,382,639,386,642,391,646,395,648,400,650,405,651,407,652,\
  //      408,652,409,652,411,653,412,653,414,653,414,654,417,655,419,656,422,657,424,657,\
  //      424,657,424,657,425,657,427,657,429,658,431,658,434,659,436,659,438,660,440,660,\
  //      442,660,443,660,443,661,446,661,450,662,453,662,456,663,460,663,463,663,469,662,\
  //      475,661,481,660,487,659,493,658,499,657,505,656,510,655,515,654,520,653,526,651,\
  //      531,649,536,644,542,638,547,632,552,626,557,621,559,620,560,618,561,616,562,613,\
  //      563,611,564,610,564,607,565,605,565,604,566,603,566,603,566,603,566,602,567,601,\
  //      567,599,567,597,567,594,568,589,568,587,569,583,569,579,568,574,568,570,568,566,\
  //      567',
  //   name: 'lips',
  //   alt: 'Lepper',
  // },
  // In the meantime, define two overlapping regions, not pretty but functional
  lips: {
    shape: 'poly',
    points:
      '596,380,595,381,591,381,587,381,582,381,578,380,576,\
    380,570,381,565,382,560,385,555,387,550,390,545,393,540,396,535,401,531,406,526,\
    411,522,417,519,422,519,422,518,424,518,426,517,428,516,430,516,430,515,432,515,\
    434,514,435,513,437,512,439,512,441,511,443,510,450,510,457,509,463,509,470,509,\
    473,509,477,509,479,510,482,511,484,511,486,512,490,512,490,512,491,513,493,513,\
    495,514,497,514,499,515,501,515,504,516,505,516,507,517,508,517,508,517,510,519,\
    512,520,514,521,516,523,518,524,520,526,524,528,526,529,529,531,531,533,533,537,\
    536,539,538,544,541,549,543,554,545,559,547,562,548,566,549,570,550,573,551,574,\
    552,575,553,576,555,576,556,576,558,576,561,576,563,575,564,573,565,572,566,571,\
    566,569,566,565,566,562,565,559,564,557,564,555,563,553,562,551,562,549,561,548,\
    561,544,559,539,555,533,550,528,546,523,541,521,537,518,533,515,527,512,520,509,\
    514,507,508,506,503,506,503,505,502,505,499,505,497,504,494,504,492,503,489,503,\
    486,503,484,502,481,502,480,502,480,502,480,502,479,502,477,502,476,501,473,501,\
    471,501,469,501,467,500,465,500,463,500,462,500,462,500,453,500,447,502,441,504,\
    435,506,429,510,421,511,418,512,417,512,415,513,414,513,413,513,413,514,412,514,\
    411,515,410,516,408,517,407,518,404,521,400,522,397,523,395,525,393,526,392,527,\
    391,527,390,529,389,530,387,532,386,534,384,538,381,544,375,549,371,553,369,556,\
    368,558,367,561,367,564,366,568,366,572,366,576,366,578,366,580,366,582,367,582,\
    367,583,367,585,367,586,367,588,367,590,366,593,366,598,365,598,367,598,370,598,\
    373,598,376,598,379,596,380',
    name: 'lips',
    alt: 'Lepper-1',
    linkedWith: 'lips2',
  },
  lips2: {
    shape: 'poly',
    points:
      '585,367,589,367,591,366,594,366,597,365,600,365,605,\
    365,609,365,613,366,616,368,620,369,624,371,627,374,634,379,639,386,643,392,643,\
    392,645,395,646,398,648,400,649,403,649,403,652,409,654,414,656,420,657,425,658,\
    431,659,437,660,441,661,444,662,447,662,451,663,454,663,458,663,464,663,470,662,\
    475,661,481,660,486,659,492,659,496,657,503,655,510,654,518,652,525,650,528,648,\
    532,646,536,643,540,640,543,637,547,634,550,630,554,627,556,624,558,620,559,617,\
    560,612,562,605,565,600,567,594,568,588,569,582,569,575,567,573,566,569,566,565,\
    565,562,564,558,563,557,562,556,561,556,559,556,558,556,557,556,555,556,554,556,\
    554,556,553,556,551,556,550,556,548,556,548,563,549,566,549,570,550,573,550,576,\
    550,584,550,587,550,589,550,590,549,591,549,593,549,595,548,595,548,598,548,601,\
    548,603,548,606,548,606,548,608,547,610,546,613,545,615,545,617,543,619,543,621,\
    542,623,541,625,541,626,540,628,539,630,538,631,537,633,535,634,534,635,533,636,\
    531,637,530,643,523,646,518,648,512,650,506,651,499,652,491,653,487,654,484,655,\
    480,655,476,656,473,656,469,656,464,656,462,655,459,655,457,654,454,652,450,652,\
    450,652,448,651,446,651,444,650,442,650,442,650,442,650,440,649,438,648,436,647,\
    434,647,434,645,426,643,418,640,411,637,404,633,398,626,392,622,389,618,387,614,\
    385,610,384,605,383,601,382,592,381,582,381,573,380,573,380,573,377,573,373,572,\
    370,572,366,572,366,572,366,575,366,579,366,582,367,585,367,585,367',
    name: 'lips',
    alt: 'Lepper-2',
    linkedWith: 'lips',
  },
  'mouth-cavity': {
    shape: 'poly',
    points:
      '582,390,582,390,583,390,585,390,587,391,589,391,591,\
    392,593,392,596,392,597,393,599,393,600,393,600,393,600,393,601,391,601,389,602,\
    387,602,385,602,385,602,385,603,385,604,385,604,385,605,385,605,385,605,385,605,\
    388,606,390,606,393,606,395,606,395,606,395,608,396,610,397,611,397,613,398,613,\
    398,613,398,613,397,613,397,613,396,613,395,613,395,613,395,615,394,617,393,618,\
    392,620,391,620,391,620,394,620,395,621,397,622,398,623,399,625,401,625,401,625,\
    402,624,402,624,403,623,403,623,403,623,403,625,403,628,402,630,402,632,401,632,\
    401,632,401,633,402,633,403,634,404,634,405,634,405,634,405,633,406,633,406,632,\
    407,631,407,631,407,632,408,634,408,635,409,636,410,637,411,638,412,640,414,642,\
    419,644,424,646,430,647,435,648,438,649,442,651,447,652,452,654,457,655,462,655,\
    465,655,465,655,466,654,467,654,469,654,470,653,473,653,478,652,484,650,490,649,\
    496,648,503,647,507,647,510,647,511,646,513,646,514,646,515,646,515,643,515,641,\
    515,639,514,638,513,638,512,637,511,637,509,637,507,636,505,636,502,636,500,634,\
    496,633,492,631,490,630,488,629,486,627,484,626,483,625,482,625,481,624,480,623,\
    478,623,477,623,474,623,468,623,460,620,453,619,449,617,446,615,444,613,441,610,\
    439,606,439,602,438,597,439,594,442,590,444,587,448,586,452,585,456,586,460,586,\
    463,586,465,585,466,584,467,583,469,581,469,578,470,576,465,575,462,575,459,575,\
    455,574,452,573,448,571,445,569,442,566,441,564,439,561,438,558,438,554,438,551,\
    439,548,440,545,441,543,443,541,446,537,452,536,460,536,466,536,469,536,472,537,\
    475,537,477,537,479,537,480,537,482,536,484,534,486,533,487,532,489,531,491,529,\
    494,528,497,528,499,527,501,527,502,527,503,526,504,526,505,525,506,524,507,522,\
    508,520,510,520,510,519,507,518,505,517,502,516,499,516,499,515,494,514,487,513,\
    481,512,474,511,467,511,462,511,458,512,453,513,448,514,443,516,437,518,432,520,\
    427,522,422,525,418,527,413,530,409,533,406,533,406,534,407,535,407,536,408,537,\
    408,537,408,537,408,538,407,539,405,540,404,541,403,541,403,541,403,542,401,543,\
    399,543,398,544,396,544,396,545,397,545,398,546,398,547,398,549,398,550,398,552,\
    396,555,394,557,394,558,394,563,394,567,394,571,393,576,392,578,390,579,389,579,\
    387,580,386,580,385,581,383,581,382,581,382,581,384,582,386,582,388,582,390,582,\
    390',
    name: 'mouth-cavity',
    alt: 'Munnhule',
  },
  'upper-esophagus': {
    shape: 'poly',
    points:
      '540,451,541,448,543,446,546,444,548,443,551,442,554,\
    441,556,441,559,441,561,441,564,442,565,442,567,443,569,446,570,448,571,450,572,\
    453,572,455,572,458,572,460,572,463,573,465,573,467,574,469,576,470,578,472,581,\
    472,583,471,585,470,587,468,588,466,589,465,589,464,589,463,589,461,589,460,589,\
    459,589,457,589,455,589,453,589,451,589,449,590,448,592,444,596,442,601,441,603,\
    441,605,441,607,442,609,442,611,443,613,445,616,449,618,453,618,457,619,461,619,\
    465,619,470,619,470,619,472,620,474,620,476,620,478,620,478,617,478,614,478,611,\
    478,609,478,606,478,603,479,599,480,596,483,592,484,589,486,585,488,581,488,577,\
    488,573,486,570,484,566,482,562,480,559,479,555,477,552,477,549,477,546,477,543,\
    478,539,479,539,475,538,470,538,465,538,460,538,455,540,451',
    name: 'upper-esophagus',
    alt: 'Svelg',
  },
  tongue: {
    shape: 'poly',
    points:
      '582,490,586,490,588,489,591,488,593,487,595,485,598,\
    483,602,482,606,480,610,480,615,480,619,480,623,483,627,485,629,488,631,492,632,\
    496,633,500,633,504,633,505,634,506,634,508,634,509,634,510,634,511,633,513,632,\
    516,630,520,629,523,627,526,626,528,625,530,624,533,622,536,620,538,618,541,617,\
    542,617,542,616,543,614,543,613,544,610,545,608,545,606,546,604,547,603,548,601,\
    548,600,549,600,549,600,549,598,549,596,549,593,549,591,549,591,549,591,549,589,\
    549,588,550,586,550,584,550,584,550,584,550,580,550,577,550,573,550,569,550,569,\
    550,567,550,566,549,565,549,564,549,563,548,562,548,556,546,551,544,546,541,541,\
    539,537,535,532,530,531,528,530,526,529,525,529,523,529,521,529,518,528,511,528,\
    503,531,496,532,492,534,489,536,486,539,483,542,481,546,480,550,480,554,480,557,\
    481,560,482,562,483,564,484,567,485,569,487,572,488,575,489,578,490,582,490',
    name: 'tongue',
    alt: 'Tunge',
  },
};

const headMapKeys = Object.keys(headMapParts);

export default {
  parts: headMapParts,
  width: 702,
  height: 605,
  image: '/kroppskart/images/head.png',
  name: 'head',
  keys: headMapKeys,
  responsive: headRes,
};
