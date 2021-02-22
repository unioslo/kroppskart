import { MapParts } from './mapType';

const wholeBodyMapParts: MapParts = {
  head: {
    points:
      '122,9,127,4,135,2,143,2,152,2,160,6,164,12,167,16,168,20,168,25,168,29,168,33,167,38,167,38,168,38,169,39,170,39,171,39,171,39,171,44,170,49,168,52,166,56,164,58,163,57,161,63,160,66,159,69,157,71,156,73,153,75,148,79,143,79,138,77,133,75,128,71,125,66,123,63,122,62,121,61,120,60,119,59,119,56,119,56,119,55,118,54,118,53,117,52,117,52,117,52,117,51,116,50,116,49,115,47,115,47,115,45,115,44,116,43,116,41,117,40,119,39,117,34,116,29,116,24,117,18,119,13',
    alt: 'Hode sett forfra',
    linkedWith: 'head-back',
  },
  'right-arm': {
    points:
      '17,268,17,268,20,266,23,264,26,262,29,260,29,260,31,258,34,253,38,248,41,243,44,238,46,235,46,235,48,227,51,220,53,212,56,204,56,204,56,204,59,198,62,192,65,186,68,180,68,180,68,177,69,172,69,167,69,162,70,156,72,149,74,142,75,136,76,130,77,124,79,118,82,111,84,108,86,105,88,102,91,100,94,98,97,97,98,97,99,97,100,97,102,97,103,97,104,97,105,103,106,108,106,112,106,116,105,121,103,127,101,133,99,135,98,137,97,139,96,141,96,147,96,147,96,152,96,156,96,161,96,165,96,165,96,165,94,171,93,177,91,182,90,188,90,188,88,193,87,199,85,205,84,211,82,216,79,221,79,221,74,228,70,236,65,243,61,250,61,250,61,250,58,253,56,256,53,259,51,262,51,262,51,262,48,269,45,277,42,284,40,291,40,291,39,293,38,296,37,298,36,300,34,302,32,303,32,303,32,304,31,306,30,307,28,309,24,312,25,309,25,308,25,308,24,308,24,309,22,310,22,310,21,311,21,311,20,311,20,311,19,311,19,307,19,306,19,306,18,306,17,308,15,310,15,309,14,309,14,308,14,308,14,307,14,306,14,305,14,303,14,302,15,300,15,298,15,297,16,294,16,290,17,287,18,284,20,280,22,278,18,278,16,280,13,281,10,283,6,284,1,283,1,283,1,283,1,282,1,282,1,281,1,281,7,277,9,276,11,274,12,272,13,271',
    alt: 'Høyre arm sett forfra',
    linkedWith: 'right-arm-back',
  },
  chest: {
    points:
      '190,142,190,142,188,140,186,136,184,133,182,128,180,121,179,117,179,113,179,109,179,106,180,102,181,98,181,98,181,98,181,98,181,98,181,97,182,95,182,95,182,95,182,94,182,94,182,93,182,93,178,92,174,90,171,88,167,86,164,83,161,80,160,79,160,77,159,75,159,73,158,72,157,71,157,71,157,71,156,72,155,73,153,74,151,77,145,78,143,79,141,79,140,79,138,78,132,76,128,73,128,72,128,73,129,73,131,75,131,75,131,75,130,74,129,73,129,73,128,72,128,72,127,74,127,76,126,78,125,80,124,82,123,84,121,86,117,88,114,89,111,91,107,92,104,93,104,93,104,94,104,94,104,95,104,95,104,95,104,95,104,95,105,96,105,96,105,97,105,97,106,102,107,107,107,111,107,116,106,121,104,126,104,129,102,131,101,134,99,137,98,139,98,141,98,148,98,154,99,158,99,162,100,164,100,164,100,164,100,168,100,172,101,175,101,179,101,179,101,179,101,183,101,188,101,192,101,196,101,196,108,196,113,194,117,192,121,189,125,185,129,179,130,177,132,174,135,170,137,167,140,164,142,164,144,164,147,167,150,170,152,174,155,177,156,179,160,185,163,189,168,192,172,194,176,196,184,196,184,196,185,185,186,174,187,163,188,152,188,152,189,157,189,154,189,151,190,147,190,142',
    alt: 'Bryst',
  },
  'left-arm': {
    points:
      '181,106,181,105,181,104,181,103,181,102,182,101,182,100,183,98,185,97,186,97,188,97,190,97,192,99,195,100,199,103,202,107,206,110,209,114,210,117,212,121,213,125,214,129,214,133,214,137,215,141,215,141,217,145,218,149,220,152,221,156,221,156,221,156,222,162,223,167,224,173,224,178,224,178,225,180,226,182,228,185,229,187,231,189,232,191,234,194,235,198,236,201,238,204,239,207,240,211,241,215,243,224,245,232,246,240,248,247,250,250,252,254,255,256,257,257,259,259,262,260,265,263,265,263,270,266,274,270,279,273,283,277,283,277,282,278,282,278,282,278,281,279,281,279,280,279,278,280,275,278,272,277,269,275,266,273,264,272,262,271,261,271,262,272,262,272,263,273,265,274,266,275,266,277,267,278,267,279,268,281,268,282,270,285,271,288,273,291,274,294,275,298,274,301,274,301,274,301,273,301,273,301,272,301,272,301,272,301,272,300,272,300,272,300,271,301,271,303,271,304,271,304,270,305,270,305,269,305,269,306,267,303,266,302,265,302,265,302,265,303,266,306,266,306,266,306,266,307,265,307,265,307,265,307,262,305,260,303,258,302,257,300,256,300,257,302,254,301,253,299,252,297,250,296,250,294,248,291,247,288,245,286,244,284,243,282,242,279,241,276,240,273,240,270,239,266,239,263,238,260,237,257,237,257,235,255,234,252,232,250,231,247,231,247,228,242,223,235,219,227,214,219,210,212,208,207,206,203,206,199,205,196,205,193,205,189,204,186,204,186,202,183,201,179,199,176,198,172,198,172,198,172,197,168,196,164,195,159,194,155,194,155,194,155,193,153,193,152,192,150,191,148,191,148,191,145,191,144,191,143,191,142,191,140,190,137,190,137,190,138,190,139,189,139,189,140,189,140,186,134,184,129,182,124,180,118,180,113',
    alt: 'Venstre arm sett forfra',
    linkedWith: 'left-arm-back',
  },
  abdomen: {
    points:
      '130,181,131,179,134,176,136,173,138,169,141,167,143,\
    167,145,167,148,170,151,173,154,176,156,180,157,182,162,187,165,191,169,194,173,\
    197,178,198,185,198,185,203,185,206,185,209,185,212,186,215,187,220,181,224,176,\
    224,172,226,169,226,167,227,163,229,160,231,157,233,152,237,151,238,149,238,146,\
    238,144,238,140,238,136,238,131,233,127,231,123,229,120,227,118,226,116,226,114,\
    225,112,225,110,225,107,224,104,223,100,220,100,220,100,219,100,217,101,215,101,\
    212,101,209,101,206,102,204,102,201,102,199,102,198,102,198,106,198,109,198,111,\
    197,114,196,116,195,118,194,123,191,126,187,130,181',
    alt: 'Mage',
  },
  'right-leg': {
    points:
      '130,235,132,237,133,238,134,239,135,239,136,239,136,\
    239,138,239,139,238,144,239,144,239,144,242,144,245,144,248,144,252,144,256,144,\
    260,143,264,143,267,143,270,143,272,143,273,144,280,144,285,144,290,143,294,142,\
    299,141,306,141,306,141,308,140,312,139,316,138,320,137,325,136,330,135,335,135,\
    338,134,342,134,344,134,344,134,344,133,346,132,349,132,351,131,355,130,359,129,\
    362,128,366,127,368,127,371,126,373,126,373,126,376,126,379,126,382,127,384,127,\
    387,127,390,127,398,127,403,126,409,126,414,125,419,123,427,123,431,121,436,120,\
    442,120,448,119,454,119,457,119,457,120,458,120,460,120,461,120,463,120,465,121,\
    468,121,470,121,471,121,473,121,474,121,474,122,475,122,475,122,476,122,476,122,\
    477,123,480,123,483,123,490,124,496,124,502,125,508,125,512,125,512,124,515,123,\
    518,123,521,122,524,122,524,120,523,119,523,117,523,115,523,113,523,112,521,112,\
    521,109,521,106,519,104,518,100,516,99,515,99,515,99,514,98,512,98,511,97,510,97,\
    510,97,510,97,509,97,507,97,505,98,502,98,499,98,496,98,494,98,491,98,489,98,488,\
    98,488,98,488,99,487,99,486,99,484,100,482,100,481,101,479,101,477,101,475,102,\
    474,102,473,102,473,101,474,101,473,100,473,100,472,100,471,101,470,101,467,101,\
    466,102,464,102,462,103,460,102,457,102,457,102,454,101,449,100,445,100,439,99,433,\
    98,426,97,420,96,416,96,411,95,408,95,408,95,408,95,407,95,406,95,404,96,402,96,\
    399,96,394,97,387,97,380,98,372,98,365,98,360,99,357,99,355,99,353,99,352,99,351,\
    99,351,99,342,97,333,95,324,93,314,91,303,91,292,91,292,91,291,91,289,91,288,91,\
    285,91,283,91,281,91,279,91,277,91,275,91,274,91,274,91,268,92,264,93,260,94,256,\
    95,252,96,247,96,247,96,245,96,243,97,241,97,238,98,235,98,231,99,228,99,226,100,\
    224,100,222,100,222,104,223,110,225,116,227,121,230,127,232,130,235',
    alt: 'Høyre bein sett forfra',
    linkedWith: 'right-leg-back',
  },
  'left-leg': {
    points:
      '164,474,164,474,165,472,165,470,166,468,166,466,166,\
    466,166,466,166,465,166,463,166,461,166,459,166,456,166,454,166,451,166,449,166,\
    447,166,446,166,446,166,446,165,443,165,439,164,435,163,430,162,424,161,419,160,\
    413,159,409,159,405,158,402,158,402,158,396,158,389,159,383,160,377,161,372,161,\
    369,161,369,161,368,160,366,160,364,159,362,159,360,158,357,158,355,157,353,157,\
    351,156,350,156,350,156,350,156,349,156,347,156,345,155,342,155,338,154,331,152,\
    322,151,313,149,303,148,294,147,287,146,283,146,280,146,278,145,276,145,275,145,\
    275,145,266,144,260,144,255,144,250,144,246,144,239,146,238,147,239,149,239,151,\
    239,152,238,154,237,156,236,158,234,161,231,165,228,170,227,175,225,179,224,184,\
    223,187,222,188,225,189,228,190,233,191,237,192,242,193,247,194,252,195,257,195,\
    261,196,265,196,269,196,272,196,272,196,276,196,281,196,285,196,289,196,289,196,\
    289,196,290,196,292,196,294,196,296,196,298,195,300,195,303,195,304,195,306,195,\
    307,195,307,195,307,195,307,195,307,194,307,194,307,194,307,194,307,194,308,194,\
    310,194,312,193,314,193,317,192,323,192,329,191,334,190,339,189,343,189,346,189,\
    350,189,354,189,359,189,359,189,362,190,366,190,369,190,372,190,372,190,372,190,\
    374,190,377,190,379,190,383,190,387,191,390,191,394,191,396,191,399,191,401,191,\
    401,191,410,189,421,186,430,185,435,184,439,183,443,182,447,181,451,181,454,181,\
    459,181,461,182,463,182,465,183,466,183,469,183,470,183,471,183,472,183,473,182,\
    474,181,474,181,474,182,477,183,480,184,483,185,486,185,486,185,486,185,487,185,\
    489,185,491,185,494,186,497,186,499,186,502,187,504,187,506,187,507,187,507,187,\
    507,187,508,187,508,187,509,187,510,187,510,187,510,187,511,186,511,186,512,185,\
    512,185,512,185,512,185,513,184,513,184,514,183,515,183,515,183,515,183,515,182,\
    516,181,516,180,517,180,517,180,517,180,517,179,518,178,519,178,520,178,520,178,\
    520,177,520,176,521,175,521,174,522,174,522,174,522,173,522,172,522,170,523,169,\
    523,169,523,169,523,168,522,167,522,166,521,165,521,165,521,164,519,164,518,163,\
    516,163,514,162,513,162,511,162,508,163,502,164,497,165,491,166,486,167,483,165,\
    482,164,481,164,479,164,478,164,476,164,474',
    alt: 'Venstre bein sett forfra',
    linkedWith: 'left-leg-back',
  },
  genitals: {
    points: '248,359,248,445,326,445,326,359',
    alt: 'Kjønnsorganer',
  },
  'head-back': {
    points:
      '406,46 , 406,38 , 409,34,409,28,409,22,409,16,411,12,415,6,423,2,431,2,439,1,448,3,453,8,456,10,457,14,458,18,459,23,459,27,459,31,459,31,458,35,462,38, 462,44, 461,50, 456,56, 454,59,453,63,450,66,447,63,445,60,442,58,439,56,436,56,431,57,430,57,429,57,427,58,426,58,425,59,424,60,423,60,422,62,421,63,420,64,419,66,418,67,415,63,414,60,413,56, 408,53,',
    alt: 'Hode sett bakfra',
    linkedWith: 'head',
  },
  neck: {
    points:
      '400,105,400,104,398,102,398,99,397,97,397,95,398,94,\
    399,93,400,92,401,92,403,91,404,91,405,90,407,90,409,89,411,88,412,87,414,86,415,\
    84,419,79,420,73,421,68,422,66,423,63,425,62,427,60,430,59,434,59,435,59,436,59,\
    438,59,439,59,440,59,441,59,444,60,446,61,447,63,448,65,449,67,450,69,451,73,452,\
    78,455,81,457,83,458,84,460,86,462,87,464,88,466,89,467,90,468,91,469,91,470,92,\
    471,93,471,94,472,95,472,96,471,97,471,97,471,98,471,99,471,103,469,106,467,108,\
    465,110,462,111,458,113,457,113,454,114,452,114,449,115,447,115,447,115,447,115,\
    446,115,444,115,442,115,439,115,436,115,433,115,431,115,428,115,426,115,425,115,\
    425,115,421,114,416,113,412,112,407,110,403,108,400,105',
    alt: 'Nakke',
  },
  'left-arm-back': {
    points:
      '307,268,310,266,313,264,316,262,318,261,321,259,322,257,325,254,328,250,331,245,334,240,337,236,339,232,339,232,341,225,343,218,345,211,347,204,347,204,347,204,350,198,354,191,357,185,360,178,360,178,360,178,360,173,360,169,361,164,361,159,361,159,361,159,362,154,364,149,365,144,366,139,366,139,366,139,366,137,367,134,367,132,367,129,367,129,368,125,370,120,372,115,374,110,376,105,379,102,381,100,384,98,386,97,389,95,392,94,394,93,396,97,397,103,398,108,398,114,398,119,397,124,397,124,396,128,395,132,393,135,392,139,392,139,392,139,392,144,391,150,390,155,390,160,390,160,390,160,388,166,386,172,384,178,382,184,382,184,380,192,379,197,377,203,376,209,374,214,370,222,368,225,365,231,361,236,358,241,355,246,352,249,352,249,350,252,347,256,345,259,342,262,342,262,342,262,338,271,335,281,331,290,327,299,327,299,327,299,327,299,326,299,326,298,325,298,325,298,325,298,324,301,323,303,321,306,320,308,320,308,316,312,315,312,316,312,316,312,317,311,317,311,317,311,316,311,315,311,313,311,312,311,312,311,312,311,311,311,310,310,309,310,307,310,307,310,307,310,307,308,306,307,306,306,305,305,305,305,305,305,307,298,308,291,310,284,311,277,311,277,309,278,306,280,303,281,300,282,297,283,294,282,296,281,298,278,301,276,303,273,305,270',
    alt: 'Venstre arm sett bakfra',
    linkedWith: 'left-arm',
  },
  back: {
    points:
      '433,269,431,271,428,272,425,273,422,274,418,274,414,\
    274,411,274,407,273,404,272,401,271,398,270,396,268,393,265,391,261,390,257,389,\
    253,388,249,388,245,388,245,388,242,389,238,390,234,390,228,391,222,392,216,393,\
    211,393,206,394,202,394,199,394,199,394,191,394,180,394,168,394,163,394,157,394,\
    152,394,147,395,143,395,139,395,137,396,135,397,133,398,130,399,128,400,124,400,\
    120,401,117,401,114,400,112,400,109,399,105,399,104,398,104,398,104,397,105,397,\
    105,397,106,398,107,400,108,405,110,407,111,410,111,413,112,416,113,420,115,425,\
    116,426,116,431,115,436,115,442,115,447,115,448,115,451,115,454,115,457,114,460,\
    113,463,111,465,110,467,109,468,108,470,107,471,107,471,106,471,107,471,111,471,\
    115,472,118,472,122,473,126,474,129,475,131,477,132,478,134,479,136,480,137,480,\
    139,481,141,482,143,482,145,482,148,482,150,482,152,482,152,482,155,482,157,482,\
    160,482,162,482,162,482,162,482,165,481,169,481,173,480,178,479,184,479,189,478,\
    194,478,198,477,202,477,205,477,205,477,205,477,208,478,212,479,216,480,221,480,\
    226,481,231,482,237,483,240,483,244,484,247,484,247,484,254,482,259,479,263,477,\
    266,475,267,472,269,470,270,467,272,464,273,462,273,461,273,459,274,457,274,456,\
    274,454,274,451,274,448,273,445,272,442,270,439,268,438,266,437,264,437,264,436,\
    265,436,265,435,267,433,269',
    alt: 'Rygg',
  },
  'right-arm-back': {
    points:
      '503,118,504,122,505,126,505,129,506,133,507,137,507,141,508,143,509,145,510,148,511,150,512,153,513,157,513,157,514,162,514,168,515,173,516,178,516,178,516,178,518,183,521,189,524,194,527,199,527,199,529,203,530,207,531,212,532,216,533,221,534,225,535,230,536,235,537,240,538,245,539,249,542,253,544,255,547,257,550,259,553,261,556,264,559,266,559,266,562,268,564,270,567,272,570,274,570,274,570,275,571,276,571,276,571,277,571,278,572,278,570,280,567,279,564,278,560,276,557,274,555,273,555,273,557,279,560,285,562,291,564,297,564,297,564,297,564,298,563,300,563,301,562,303,562,303,562,303,562,304,561,304,560,305,559,306,559,306,559,306,558,306,556,307,555,307,554,307,554,307,554,307,553,307,552,306,552,306,551,305,551,305,551,305,549,302,548,301,546,299,544,297,544,300,542,298,539,293,536,288,533,283,531,278,531,275,530,271,529,268,529,265,528,262,528,259,526,255,526,255,524,252,522,248,519,243,516,237,513,232,509,226,506,220,504,215,501,211,499,208,499,208,498,203,497,199,496,196,496,192,496,189,495,185,495,185,494,182,493,180,491,177,490,174,490,174,490,174,489,170,488,166,486,161,485,157,485,157,485,157,484,153,483,149,482,144,482,140,482,140,481,137,480,136,478,134,476,131,474,129,473,124,470,118,470,113,470,108,470,103,471,98,472,92,477,94,484,97,490,102,495,107,500,113',
    alt: 'Høyre arm sett bakfra',
    linkedWith: 'right-arm',
  },
  'left-leg-back': {
    points:
      '411,468,412,473,413,476,413,479,413,481,413,483,413,488,414,492,415,496,415,500,416,504,416,508,415,511,415,517,414,520,412,521,410,523,408,522,405,519,405,519,401,517,397,516,393,514,389,512,389,512,389,509,388,504,389,498,389,493,389,488,390,485,390,485,391,483,391,482,392,480,392,478,392,478,392,478,392,475,392,473,392,470,392,467,392,467,393,465,393,463,393,462,394,461,394,460,394,460,394,449,392,440,390,429,388,419,386,409,386,397,386,397,386,395,386,392,387,390,387,387,387,387,387,387,387,379,388,371,389,363,389,355,389,355,389,352,390,350,390,348,390,346,390,344,390,341,390,341,389,338,388,335,388,331,387,328,387,328,386,324,385,317,384,311,383,305,382,298,382,294,382,294,382,288,382,282,382,276,382,270,382,270,382,266,383,263,383,260,384,257,384,254,385,250,385,250,387,253,388,256,390,260,391,263,391,263,393,267,397,269,401,272,404,274,409,275,413,275,414,275,417,275,421,275,424,274,427,274,427,274,428,273,428,273,429,273,429,273,429,272,429,272,429,272,431,272,432,271,434,271,435,270,435,270,435,279,434,292,432,305,430,317,427,330,425,339,423,348,421,354,419,360,418,365,417,372,417,381,417,381,417,384,417,386,418,389,418,391,418,391,418,391,418,396,417,401,417,405,417,410,417,410,415,420,414,427,412,435,411,442,410,450,410,461,411,464,410,464,410,465,410,465,410,466',
    alt: 'Venstre bein sett bakfra',
    linkedWith: 'left-leg',
  },
  'right-leg-back': {
    points:
      '472,460,471,454,472,447,474,440,475,433,478,426,479,420,480,416,480,412,481,408,482,403,482,399,482,395,482,395,482,392,481,388,481,385,481,381,481,381,481,381,481,373,481,364,480,356,480,347,480,347,480,347,481,336,483,324,484,313,486,301,486,301,486,301,486,294,486,287,487,279,487,272,487,272,487,272,486,267,486,262,485,256,485,251,485,251,485,251,485,251,484,251,484,251,483,251,483,251,482,258,478,264,474,268,469,272,463,274,456,275,452,275,449,274,446,273,442,272,440,271,436,269,436,274,437,280,437,285,438,290,439,296,440,301,440,301,442,314,444,326,446,339,448,351,448,351,448,351,449,355,450,359,450,362,451,366,451,366,451,366,451,373,450,379,450,386,449,392,449,392,449,401,450,407,452,414,453,420,455,426,456,434,456,443,456,446,456,449,456,452,456,454,456,461,456,464,456,462,456,461,456,459,456,459,456,464,455,467,455,470,455,473,455,477,455,480,456,483,456,483,455,490,454,498,454,505,453,512,453,512,453,514,454,516,454,518,455,520,456,522,458,521,459,521,462,520,464,519,467,518,469,517,470,516,472,516,475,513,476,509,478,506,479,502,477,501,477,500,477,495,476,490,476,486,475,481,474,479,474,476,474,473,474,471,474,468,474,466,474,463,473,463,474,464,474,464,475,464,475,464',
    alt: 'Høyre bein sett bakfra',
    linkedWith: 'right-leg',
  },
};

const wholeBodyMapKeys = Object.keys(wholeBodyMapParts);

export default {
  parts: wholeBodyMapParts,
  width: 576,
  height: 526,
  image: {
    male: '/kroppskart/images/wholeBodyMale.png',
    female: '/kroppskart/images/wholeBodyFemale.png',
  },
  name: 'wholeBody',
  keys: wholeBodyMapKeys,
};
