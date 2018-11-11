import React, { Component } from "react";
import Todolist from "./Todolist";
import "./readingLevel.css";

const students = [
  {
    name: "Mg Htet Wai Hlyan",
    rawScore: 34
  },

  {
    name: "Mg Zarni Oo",
    rawScore: 42
  },

  {
    name: "    Mg Linn Thant Maung",
    rawScore: 46
  },

  {
    name: "    Mg Min Phone Paing ",
    rawScore: 31
  },

  {
    name: "         Mg Myo Thet Khaing	",
    rawScore: 47
  },

  {
    name: "   Mg Zaw Min Thein 		",
    rawScore: 42
  },

  {
    name: "    Mg Hein Zin Htet			",
    rawScore: 59
  },

  {
    name: "    Mg Kyaw Swar Tun			",
    rawScore: 44
  },

  {
    name: "            Mg Soe Kyaw Kyaw			",
    rawScore: 57
  },

  {
    name: "            Mg Kyaw Linn Oo				",
    rawScore: 62
  },

  {
    name: "   Mg Kaung Pyae Zone	",
    rawScore: 67
  },

  {
    name: "    Mg Zaw Zaw Aung 			",
    rawScore: 28
  },

  {
    name: "    Mg Zin Ko Ko Myint	",
    rawScore: 50
  },

  {
    name: "    Mg Wai Linn	        ",
    rawScore: 46
  },
  {
    name: "    Mg Phyo Thet Ko				",
    rawScore: 78
  },

  {
    name: "    Mg Myat Noe Thu				",
    rawScore: 48
  },

  {
    name: "     Mg Myo Min Tun					",
    rawScore: 41
  },

  {
    name: "Mg Zwe Bone Htet	",
    rawScore: 73
  },
  {
    name: "    Mg Aung Kyar Boss",
    rawScore: 33
  },
  {
    name: "   Mg Yarzar Tun 					",

    rawScore: 48
  },
  {
    name: "            Mg Kaung Khant Oo		",

    rawScore: 44
  },
  {
    name: "    Mg Kaung Htet Kyaw	",

    rawScore: 39
  },
  {
    name: "            Mg Myat Kyaw Thu			",
    rawScore: 59
  },
  {
    name: "            Mg Kyaw Swar Bo				",
    rawScore: 61
  },
  {
    name: "    Mg Zaw Htet Oo					",
    rawScore: 39
  },
  {
    name: "            Mg Arkar Phyo Aung	",
    rawScore: 39
  },
  {
    name: "            Mg Kyaw Ye Htet				",
    rawScore: 29
  },
  {
    name: "            Mg Hein Min Aung			",
    rawScore: 34
  },
  {
    name: "        Mg Kaung Zin Hein		",
    rawScore: 41
  },

  {
    name: "        Ma Thazin Aye					",
    rawScore: 52
  },
  {
    name: "        Ma Kyu Thinn Wai					",
    rawScore: 69
  },

  {
    name: "        Ma Thant Thant Phyu			",
    rawScore: 62
  },

  {
    name: "        Ma Thin Myat Ko Ko				",
    rawScore: 55
  },

  {
    name: "        Ma Nway Nway San 					",
    rawScore: 57
  },

  {
    name: "        Ma Su Myat Aung					  ",
    rawScore: 54
  },

  {
    name: "        Ma Hsu Mon Aye 					",
    rawScore: 68
  },

  {
    name: "        Ma Hsu Htar Lwai					",
    rawScore: 62
  },

  {
    name: "        Ma Nan Su Mon 				        ",
    rawScore: 50
  },

  {
    name: "        Ma Hsu Pyae Kyaw					",
    rawScore: 57
  },

  {
    name: "        Ma Zue Zin Htet					        ",
    rawScore: 59
  },

  {
    name: "        Ma Phoo Myat San					",
    rawScore: 42
  },

  {
    name: "        Ma Ei Ei Kyaing					",
    rawScore: 67
  },

  {
    name: "        Ma Hsu Mon Kyaw					    ",
    rawScore: 68
  },

  {
    name: "        Ma Myat Thazin Ei Soe	",
    rawScore: 60
  },

  {
    name: "        Ma Moe Thu Myint					",
    rawScore: 45
  },

  {
    name: "        Ma Aye Myint Mo Aung		",
    rawScore: 72
  },

  {
    name: "        Ma Kyawt Hmue Khin				",
    rawScore: 43
  },

  {
    name: "        Ma Khin Pyae Pyae Kyaw",
    rawScore: 57
  },

  {
    name: "        Ma Zar Zar Tun				",
    rawScore: 46
  },

  {
    name: "        Ma Theint Theint Soe		",
    rawScore: 65
  },

  {
    name: "    Ma Nway Zin Chit					",
    rawScore: 51
  },

  {
    name: "           Ma Phyu Zin Phyo					",
    rawScore: 45
  },

  {
    name: "           Mg Kyaw Myo Oo					",
    rawScore: 58
  },
  {
    name: "           Mg Kaung Thant					 ",
    rawScore: 58
  },
  {
    name: "           Mg Aung Myo Htwe			",
    rawScore: 31
  },
  {
    name: "            Mg Thiha Lwin					",
    rawScore: 26
  },

  {
    name: "            Mg Zayyar Lin 					",
    rawScore: 35
  },
  {
    name: "            Mg Tin Ko Min 					",
    rawScore: 24
  },
  {
    name: "            Mg Kaung Htut					",
    rawScore: 56
  },

  {
    name: "     Mg Aung Khant Thu		",
    rawScore: 27
  },
  {
    name: "    Mg Tun Tun Win 				",
    rawScore: 45
  },
  {
    name: "    Mg Htoo Naing Shin	",
    rawScore: 48
  },
  {
    name: "         Mg Htet Moe Aung			",
    rawScore: 37
  },
  {
    name: "    Mg Zin Ko Win 					",
    rawScore: 30
  },
  {
    name: "    Mg Aung Linn Oo				",
    rawScore: 42
  },
  {
    name: "            Mg Naing Zay Lin 		",
    rawScore: 34
  },
  {
    name: "            Mg Kyaw Zin Htet			",
    rawScore: 32
  },
  {
    name: "           Mg Ye Linn Htet 			",
    rawScore: 38
  },
  {
    name: "            Mg Yarzar Linn				",
    rawScore: 57
  },
  {
    name: "            Mg Chan Ko Ko 					",
    rawScore: 51
  },
  {
    name: "            Mg Aung Linn Soe			",
    rawScore: 50
  },
  {
    name: "            Mg Min Thu					",
    rawScore: 32
  },
  {
    name: "            Mg Aung Chit Thu			",
    rawScore: 55
  },
  {
    name: "            Mg Tin Win Aung				 ",
    rawScore: 23
  },
  {
    name: "            Mg Noe Noe Tun 				 ",
    rawScore: 56
  },
  {
    name: "            Mg Kaday Moe Htike	",
    rawScore: 24
  },
  {
    name: "            Mg Soe Linn Kyaw			",
    rawScore: 14
  },
  {
    name: "    Mg Saw Sar Ka Kwai Htoo",
    rawScore: 29
  },

  {
    name: "            Mg Shein Min Oo				",
    rawScore: 34
  },
  {
    name: "           Mg Hein Htet Oo				",
    rawScore: 33
  },

  {
    name: "            Ma Htet Htet Aye Nyein		",
    rawScore: 67
  },

  {
    name: "    Ma Moe Moe Tun	",
    rawScore: 59
  },
  {
    name: "            Ma Wai Moe Hnin Thein			",
    rawScore: 31
  },

  {
    name: "            Ma Chaw Mwai Mwai Lwin		",
    rawScore: 26
  },

  {
    name: "         Ma Ei Thinzar Lwin					",
    rawScore: 28
  },

  {
    name: "            Ma Hanny Theint			",
    rawScore: 73
  },
  {
    name: "       Ma Wut Yi Mon					",
    rawScore: 79
  },
  {
    name: "       Ma Aye Thin Cho			",
    rawScore: 45
  },

  {
    name: "       Ma Khaing Khaing Htet Oo",
    rawScore: 53
  },

  {
    name: "       Ma Thidar Moe					",
    rawScore: 41
  },
  {
    name: "       Ma Khaing Nyein Hsu					",
    rawScore: 70
  },

  {
    name: "       Ma Thuzar Aye					 ",
    rawScore: 51
  },
  {
    name: "       Ma Khaing Thiri Zaw ",
    rawScore: 56
  },

  {
    name: "       Ma Aye Wut Yi Tun		 ",
    rawScore: 77
  },

  {
    name: "       Ma Win Htike Htike Naing",
    rawScore: 52
  },

  {
    name: "       Ma  Thuzar Wai					",
    rawScore: 38
  },
  {
    name: "       Ma Chan Myae Hlaing					",
    rawScore: 44
  },

  {
    name: "       Ma Naw Re Khu Se			",
    rawScore: 72
  },

  {
    name: "       Ma Myo Sandi Aung		",
    rawScore: 40
  },

  {
    name: "       Ma Ei Ei Moe					",
    rawScore: 32
  },
  {
    name: "       Ma Ingyin Hlaing			",
    rawScore: 26
  },

  {
    name: "       Ma Shweyi Win 					",
    rawScore: 45
  },
  {
    name: "       Ma Zue Zin Zin Win	",
    rawScore: 66
  },

  {
    name: "       Ma Zin Mon Latt				",
    rawScore: 27
  },
  {
    name: "       Mg Kyaw Thu Htike	",
    rawScore: 45
  },
  {
    name: "       Mg Yan Naing Linn	",
    rawScore: 38
  },
  {
    name: "       Mg Ye Yint Naing		",
    rawScore: 39
  },
  {
    name: "       Mg Thet Myo Oo		",
    rawScore: 40
  },
  {
    name: "       Mg Kyaw Zin Aung		",
    rawScore: 33
  },
  {
    name: "       Mg Aung Ko Ko Min	",
    rawScore: 54
  },
  {
    name: "       Mg Htet Linn				",
    rawScore: 42
  },

  {
    name: "       Mg Okkar Myo Nyunt",
    rawScore: 43
  },
  {
    name: "       Mg Aung Myo Myint	",
    rawScore: 39
  },
  {
    name: "       Mg Si Thu Hein		",
    rawScore: 26
  },
  {
    name: "       Mg Nay Myo Aung			",
    rawScore: 30
  },
  {
    name: "       Mg Yan Paing Nyein",
    rawScore: 37
  },
  {
    name: "       Mg Ye Lin Oo					",
    rawScore: 27
  },

  {
    name: "       Mg Zaw Wai Phyo 		",
    rawScore: 24
  },
  {
    name: "            Mg Htet Arkar Nyei",
    rawScore: 39
  },
  {
    name: "     Mg Shine Min Htet	",
    rawScore: 49
  },
  {
    name: "    Mg Naung Zaw					",
    rawScore: 38
  },

  {
    name: "    Mg Zin Bo Tun",
    rawScore: 25
  },
  {
    name: "     Mg Myat Ko Ko					",
    rawScore: 36
  },

  {
    name: "    Mg Kaung Khant Aun",
    rawScore: 50
  },
  {
    name: "    Mg Yan Soe Aung			",
    rawScore: 45
  },
  {
    name: "    Mg Kyaw Zin Win 		",
    rawScore: 40
  },
  {
    name: "    Mg Wai Lin Tun		",
    rawScore: 41
  },
  {
    name: "    Mg Soe Htet Win 		",
    rawScore: 45
  },
  {
    name: "    Mg Myo Min Aung			",
    rawScore: 32
  },

  {
    name: "            Mg Nay Myo Thu					",
    rawScore: 48
  },

  {
    name: "Ma Ei Yadanar Soe",
    rawScore: 58
  },
  {
    name: "Ma San San Thwe		",
    rawScore: 54
  },
  {
    name: "Ma Ya Min Oo					",
    rawScore: 54
  },

  {
    name: "Ma Yoon Thinzar Maung	",
    rawScore: 56
  },

  {
    name: "Ma Naw Say Hai Paw",
    rawScore: 52
  },
  {
    name: "Ma Nyein Nyein San",
    rawScore: 55
  },
  {
    name: "Ma Kya Ngaik Nwam	",
    rawScore: 46
  },
  {
    name: "Ma Ya Min Aye 				",
    rawScore: 47
  },

  {
    name: "Ma May Phoo Aung",
    rawScore: 36
  },

  {
    name: "Ma Min Min Thu",
    rawScore: 31
  },

  {
    name: " May Thuzar Lwin",
    rawScore: 34
  },
  {
    name: "Ma Thagyan Moe					",
    rawScore: 38
  },
  {
    name: "Ma Hsu Yi Khaing 		",
    rawScore: 52
  },
  {
    name: "Ma Tin Zar Htwe 			",
    rawScore: 49
  },
  {
    name: "Ma Sandar Moe 					",
    rawScore: 54
  },
  {
    name: "Ma May Myat Noe Khin",
    rawScore: 57
  },

  {
    name: "Ma Zin Mar Myint",
    rawScore: 53
  },
  {
    name: "Ma Aye Wai Wai Hlaing 					",
    rawScore: 35
  },

  {
    name: "Ma Khaing Hnin Wai				",
    rawScore: 44
  },
  {
    name: "Ma Hnin Oo Hlaing					",
    rawScore: 45
  },

  // {
  //   name: "Ma Hnin Oo Hlaing	(2)				",
  //   rawScore: 51
  // },
  {
    name: "Ma Win Htet Khaing					",
    rawScore: 57
  },

  {
    name: "Ma Kyaut Kay Khaing					",
    rawScore: 45
  },
  {
    name: "Ma Htet Htet Moe Naung					",
    rawScore: 51
  },

  {
    name: "Ma Hnin Ei Khaing					",
    rawScore: 43
  },

  {
    name: "Ma Naw Hlaing Wai Wai Naing",
    rawScore: 50
  },

  {
    name: "Ma Hnin Oo Hlaing	 ",
    rawScore: 51
  },
  {
    name: "    Mg Kyaw Thi Ha					",
    rawScore: 73
  },
  {
    name: "        Mg Ye Min Htun				",
    rawScore: 58
  },
  {
    name: "        Mg Hein Soe					",
    rawScore: 67
  },

  {
    name: "        Mg Zin Nyi Nyi Zaw",
    rawScore: 42
  },
  {
    name: "        Mg Myint Myat Aung",
    rawScore: 50
  },
  {
    name: "        Mg Paing Thei Oo		",
    rawScore: 58
  },
  {
    name: "        Mg Yan Naing					",
    rawScore: 47
  },

  {
    name: "        Mg Zin Min Ko Ko		",
    rawScore: 56
  },
  {
    name: "        Mg Kyaw Lin Htut		",
    rawScore: 40
  },
  {
    name: "        Mg Eant Hmu Kyaw		",
    rawScore: 68
  },
  {
    name: "        Mg Aung Phyo Thu		",
    rawScore: 47
  },
  {
    name: "        Mg Soe Wanna Tun		",
    rawScore: 37
  },
  {
    name: "        Mg Thet Khaing Hto",
    rawScore: 42
  },
  {
    name: "        Mg Aung Zin Ko		",
    rawScore: 38
  },
  {
    name: "        Mg San Ko					",
    rawScore: 57
  },
  {
    name: "        Mg Thaw Zin W",
    rawScore: 52
  },
  {
    name: "        Mg Khant Htay Than ",
    rawScore: 38
  },

  {
    name: "        Mg Zin Myo Wai		",
    rawScore: 27
  },
  {
    name: "        Mg Myo Min Hein			",
    rawScore: 55
  },
  {
    name: "        Mg Myint Kyaw Aye	",
    rawScore: 50
  },
  {
    name: "        Mg Htet Naing Oo		",
    rawScore: 56
  },
  {
    name: "      Mg Thet Ka Yit Pain",
    rawScore: 57
  },

  {
    name: "      Mg Kyaw Htet Char		 ",
    rawScore: 49
  },
  {
    name: "Ma Win Ngu Phu			",
    rawScore: 77
  },
  {
    name: "Ma Phyo Kay Thway					",
    rawScore: 64
  },
  {
    name: "Ma Yin Yin Phyo				 ",
    rawScore: 63
  },
  {
    name: "Ma Khin Hnin Wai Nyin	",
    rawScore: 91
  },
  {
    name: "Ma Pan Ei Phyu					",
    rawScore: 65
  },
  {
    name: "Ma Thway Thway Tun				",
    rawScore: 49
  },
  {
    name: "Ma Thin Pyant Hlaing		",
    rawScore: 67
  },
  {
    name: "Ma Thandar Aye					 ",
    rawScore: 85
  },
  {
    name: "Ma Arr Thee Ku Mar Ree",
    rawScore: 90
  },

  {
    name: "Ma Theint Ei Ei Phyu	",
    rawScore: 65
  },
  {
    name: "Ma Phyo Myat Thwey			",
    rawScore: 54
  },
  {
    name: "Ma San San Tint					",
    rawScore: 72
  },
  {
    name: "Ma Thu Thu San					",
    rawScore: 52
  },
  {
    name: "Ma Ei Tha Zin Myint		",
    rawScore: 69
  },
  {
    name: "Ma Hnin Ei Hlaing				",
    rawScore: 38
  },
  {
    name: "Ma Khaing Hnin Wai			",
    rawScore: 62
  },
  {
    name: "Ma Thin Thin Swe				",
    rawScore: 34
  },
  {
    name: "Ma Myo Thandar Mon 		",
    rawScore: 58
  },
  {
    name: "Ma Jin Mee Shine					",
    rawScore: 69
  },
  {
    name: "Ma Yu Nandar Tun					",
    rawScore: 68
  },
  {
    name: "Ma Cherry Win 				 ",
    rawScore: 62
  },
  {
    name: "Ma Sandar Moe					",
    rawScore: 48
  },
  {
    name: "Ma Ei Thinzar Aung			",
    rawScore: 54
  },
  {
    name: "Ma Khin Wai Mon Thant",
    rawScore: 56
  },
  {
    name: "Ma Thway Zin Phyoe				",
    rawScore: 50
  },

  {
    name: "     Mg Wai Yan Myo Oo		",
    rawScore: 52
  },
  {
    name: "    Mg Soe Hlaing Win 	",
    rawScore: 85
  },
  {
    name: "    Mg Ye Wint Kyaw				",
    rawScore: 42
  },
  {
    name: "    Mg Than Htike Zaw		 ",
    rawScore: 42
  },
  {
    name: "    Mg Aung Moe Khant		",
    rawScore: 61
  },
  {
    name: "    Mg Nay Linn Aung 		",
    rawScore: 72
  },
  {
    name: "    Mg Zin Hlaing Oo			",
    rawScore: 44
  },
  {
    name: "    Mg Kyaw Zin Oo					",
    rawScore: 54
  },
  {
    name: "    Mg Nay Aung Linn			",
    rawScore: 65
  },
  {
    name: "    Mg Zin Thu Htet				",
    rawScore: 55
  },
  {
    name: "   Mg Ye Win Paing				",
    rawScore: 36
  },
  {
    name: "    Mg Nyan Linn Htet		",
    rawScore: 73
  },
  {
    name: "     Mg Zay Yar Soe				",
    rawScore: 56
  },
  {
    name: "   Mg Naing Linn Oo			",
    rawScore: 61
  },
  {
    name: "    Mg Nwey Linn Shine	",
    rawScore: 46
  },
  {
    name: "    Mg Khant Si Thu				",
    rawScore: 45
  },
  {
    name: "    Mg Oakkar Soe					 ",
    rawScore: 44
  },

  {
    name: "      Mg Thu Sait Aung			",
    rawScore: 34
  },
  {
    name: "    Mg Yan Linn Thu				",
    rawScore: 41
  },
  {
    name: "   Mg Myo Zaw Oo					",
    rawScore: 48
  },

  {
    name: "           Mg Pyait Sone Maung Maung",
    rawScore: 50
  },

  {
    name: "    Mg Chit San Maung	 ",
    rawScore: 39
  },
  {
    name: "    Mg Myo Htet Kyaw			",
    rawScore: 42
  },
  {
    name: "     Mg Aung Kyaw Linn		",
    rawScore: 85
  },
  {
    name: "    Mg Nay Myo Htet				",
    rawScore: 31
  },

  {
    name: "Ma Wait Ye Myint	",
    rawScore: 46
  },
  {
    name: "Ma Nan Pyit Pyit Phyo",
    rawScore: 70
  },
  {
    name: "Ma Ya Min Eindray				",
    rawScore: 79
  },
  {
    name: "Ma Phyo Phyo Ei					",
    rawScore: 88
  },
  {
    name: "Ma Aye Aye Soe					",
    rawScore: 50
  },
  {
    name: "Ma Naw Lin Lin Kyu	",
    rawScore: 61
  },
  {
    name: "Ma Hla Ei Phyu					",
    rawScore: 41
  },
  {
    name: "Ma Swey Zin Oo					",
    rawScore: 52
  },
  {
    name: "Ma Zar Zar Aung					",
    rawScore: 52
  },
  {
    name: "Ma Thaint Thaint Myo",
    rawScore: 71
  },
  {
    name: "Ma Mon Mon Thaw				",
    rawScore: 51
  },
  {
    name: "Ma Thaw Thaw Zin Lat	",
    rawScore: 52
  },
  {
    name: "Ma Kay Sandar Ko					",
    rawScore: 58
  },
  {
    name: "Ma Thae Su Lwin				",
    rawScore: 54
  },
  {
    name: "Ma Khin Sa Bae Phyu		",
    rawScore: 66
  },
  {
    name: "Ma Khin Su Su Thwein	",
    rawScore: 52
  },
  {
    name: "Ma Yu Thin Zar Win 		",
    rawScore: 63
  },

  {
    name: "Ma May Hnin Thu",
    rawScore: 47
  },
  {
    name: "Ma Khin Htet San",
    rawScore: 76
  },
  {
    name: "Ma Shar Shar				",
    rawScore: 54
  },
  {
    name: "Ma A Kari Kyaw		",
    rawScore: 66
  },
  {
    name: "Ma Ei Ei Moe				",
    rawScore: 58
  },
  {
    name: "Ma Sei Sar Win 	",
    rawScore: 66
  },

  {
    name: "    Mg Chit Min Wai				",
    rawScore: 23
  },
  {
    name: "            Mg Kaung Khant Kyaw",
    rawScore: 27
  },
  {
    name: "           Mg Thura Naing		",
    rawScore: 22
  },
  {
    name: "    Mg Sin Lin Tun		",
    rawScore: 23
  },
  {
    name: "         Mg Thet Naing Soe	",
    rawScore: 30
  },
  {
    name: "         Mg Pyait Sone Oo		",
    rawScore: 30
  },
  {
    name: "         Mg Naing Naing Zaw",
    rawScore: 26
  },
  {
    name: "         Mg Htet Linn Oo			",
    rawScore: 40
  },
  {
    name: "         Mg Arkar Min Oo			",
    rawScore: 36
  },
  {
    name: "        Mg Phyo Ko Ko				    ",
    rawScore: 54
  },

  {
    name: "        Mg Chan Nyein					    ",
    rawScore: 48
  },

  {
    name: "        Mg Sei Thu Naing 	",
    rawScore: 45
  },
  {
    name: "        Mg Myo Naing Win 	",
    rawScore: 20
  },
  {
    name: "        Mg Kaung HSet Naing",
    rawScore: 35
  },
  {
    name: "        Mg Zay Yar Hlaing	",
    rawScore: 23
  },
  {
    name: "        Mg Ar Kar Min 		",
    rawScore: 34
  },
  {
    name: "        Mg Kyaw Min Aung		",
    rawScore: 24
  },
  {
    name: "        Mg Bo Bo Win 					",
    rawScore: 19
  },

  {
    name: "        Mg Saw Larr Warr			",
    rawScore: 19
  },
  {
    name: "        Mg Saw Aung Naing Oo",
    rawScore: 20
  },

  {
    name: "        Mg Myat Thu Hein 		",
    rawScore: 22
  },
  {
    name: "        Mg Ko Ko Zin					",
    rawScore: 30
  },
  {
    name: "Ma Pa Pa Win				",
    rawScore: 21
  },
  {
    name: "Ma Ei Tha Zin Hlaing",
    rawScore: 23
  },
  {
    name: "Ma Thingi Moe				",
    rawScore: 26
  },

  {
    name: "Ma Mar Lar Myint",
    rawScore: 38
  },
  {
    name: "Ma Aye Wait Ye Phyo				",
    rawScore: 29
  },
  {
    name: "Ma Thingi 					",
    rawScore: 46
  },
  {
    name: "Ma Naw Thet Phuu Khaing",
    rawScore: 47
  },

  {
    name: "Ma Naw Thingyan Hlaing	",
    rawScore: 47
  },
  {
    name: "Ma Naw Htet Yu Yu Aung	",
    rawScore: 26
  },
  {
    name: "Ma Naw Chay Yay Phaw			",
    rawScore: 39
  },
  {
    name: "Ma Naw Ya Min Tun				",
    rawScore: 46
  },
  {
    name: "Ma Pan Ei Phyu					",
    rawScore: 25
  },
  {
    name: "Ma Khin Nandar Thaint",
    rawScore: 22
  },
  {
    name: "Ma Nan Lae Lae Oo				",
    rawScore: 36
  },
  {
    name: "Ma Pan Ei San					",
    rawScore: 36
  },
  {
    name: "Ma Aye Thuzar Mon 			",
    rawScore: 26
  },
  {
    name: "Ma Hla Hla Nwe					",
    rawScore: 18
  },
  {
    name: "Ma Thae Zar Chi Soe		",
    rawScore: 26
  },
  {
    name: "Ma Mo Mo Zin					",
    rawScore: 23
  },
  {
    name: "Ma Naw A Lay War					",
    rawScore: 40
  },
  {
    name: "Ma Zin Thawdar Tun					",
    rawScore: 38
  },
  {
    name: "Ma Thiri Nandar					",
    rawScore: 39
  },
  {
    name: "Ma Khaing Hnin Wai		",
    rawScore: 33
  },
  {
    name: "Ma Aye Chan May					",
    rawScore: 26
  },

  {
    name: "Ma Shwe Yin Win",
    rawScore: 18
  },
  {
    name: "Ma Aye Aye Nyein",
    rawScore: 23
  },

  {
    name: "Mg  Kyaw Myo Tun",
    rawScore: 34
  },
  {
    name: "Mg Sann Pyae Thu		",
    rawScore: 30
  },
  {
    name: "Mg Pyar Hsone Aung	",
    rawScore: 39
  },
  {
    name: "Mg Thant Zin					",
    rawScore: 40
  },

  {
    name: "Mg Ye Lin Htet",
    rawScore: 40
  },
  {
    name: "Mg Aung Ko Ko				",
    rawScore: 34
  },

  {
    name: "Mg Chit Paing Soe		",
    rawScore: 29
  },
  {
    name: "Mg Arkar Soe        ",
    rawScore: 35
  },

  {
    name: "Mg Hein Htet naing",
    rawScore: 34
  },
  {
    name: "Mg Sithu Latt					",
    rawScore: 40
  },

  {
    name: "Mg Soe Maung Maung	",
    rawScore: 25
  },
  {
    name: "Mg Htwe Lin Aung			",
    rawScore: 48
  },
  {
    name: "Mg Hein Htut Khaung",
    rawScore: 21
  },
  {
    name: "Mg Win Aung Min				",
    rawScore: 57
  },
  {
    name: "Mg Chan Myae Aung		",
    rawScore: 39
  },
  {
    name: "Mg Khain Zeya Win		",
    rawScore: 24
  },
  {
    name: "Mg Thiha Zaw					",
    rawScore: 43
  },

  {
    name: "Mg Htet Lin Oo",
    rawScore: 46
  },
  {
    name: "Mg Sithu Latt				",
    rawScore: 28
  },

  {
    name: "Mg Aung Kyaw Zawe		 ",
    rawScore: 27
  },
  {
    name: "Mg Aung Chan Zaw			",
    rawScore: 31
  },
  {
    name: "Mg Thaw Zin Khant		",
    rawScore: 29
  },
  {
    name: "Mg Myo Maung Maung Kyaw",
    rawScore: 22
  },

  {
    name: " Ma Poe thazin Khaing",
    rawScore: 52
  },

  {
    name: " Ma Aye Aye Mon	",
    rawScore: 36
  },
  {
    name: " Ma Nanda Hlaing					",
    rawScore: 29
  },

  {
    name: " Ma Shwe Thazin Minn	",
    rawScore: 58
  },

  {
    name: " Ma Mi Mi Win",
    rawScore: 20
  },
  {
    name: " Ma Zee Zawah Hpoo			",
    rawScore: 51
  },

  {
    name: " Ma Naw Hay Balu Htoo",
    rawScore: 72
  },

  {
    name: " Ma Hnin Kalyar OO			",
    rawScore: 47
  },

  {
    name: " Ma Ei Nanda Soe					",
    rawScore: 25
  },

  {
    name: " Ma Ei Ei Yadana Tun	",
    rawScore: 71
  },

  {
    name: " Ma Yadana Moe	    ",
    rawScore: 43
  },
  {
    name: " Ma Poe ei Ei Win				",
    rawScore: 46
  },

  {
    name: " Ma Thae Zu Mon					",
    rawScore: 52
  },
  {
    name: " Ma Khin Yu Yu Zin		",
    rawScore: 52
  },

  {
    name: " Ma Moe Moe San					",
    rawScore: 44
  },
  {
    name: " Ma Khin Thandar Win",
    rawScore: 43
  },

  {
    name: " Ma Su Wei Min					",
    rawScore: 35
  },
  {
    name: " Ma Phyoe Yadana Kywe",
    rawScore: 52
  },

  {
    name: " Ma Nway Ei Zin			",
    rawScore: 49
  },
  {
    name: " Ma soe thiri Lwin",
    rawScore: 57
  },

  {
    name: " Ma Htet Htet Mon	",
    rawScore: 41
  },

  {
    name: " Ma HwY Oo				",
    rawScore: 45
  },
  {
    name: " Ma Htet Htet Hlaing	",
    rawScore: 42
  },

  {
    name: " Ma Thuzar Lin					",
    rawScore: 69
  },
  {
    name: " Ma Ei Shwe Zin				",
    rawScore: 35
  },
  {
    name: " Ma Naw Phaw Ellel	",
    rawScore: 32
  },

  {
    name: " Ma Ei Zin Moe					",
    rawScore: 36
  },
  {
    name: " Ma Yi Yi Hnin					",
    rawScore: 40
  },
  {
    name: " Ma Kyi Zar Phyoe		",
    rawScore: 43
  },

  {
    name: "            Mg  Saw Wah Kaloe",
    rawScore: 44
  },
  {
    name: "Mg Kyaw Thein Kha		",
    rawScore: 52
  },
  {
    name: "Mg Myo Min Ko				        ",
    rawScore: 34
  },

  {
    name: "Mg Soe Ko Ko					 ",
    rawScore: 35
  },

  {
    name: "Mg Ye Htet aung	",
    rawScore: 38
  },
  {
    name: "Mg Aung Myat Min",
    rawScore: 55
  },
  {
    name: "Mg Pyae Kyaw Khaing",
    rawScore: 33
  },
  {
    name: "Mg Paing Thawdi				",
    rawScore: 38
  },
  {
    name: "Mg Than Myo Aung			",
    rawScore: 29
  },
  {
    name: "Mg Aung Min Tun				",
    rawScore: 39
  },
  {
    name: "Mg Aung Myo Tun",
    rawScore: 42
  },
  {
    name: "Mg Myat Min Tun",
    rawScore: 25
  },
  {
    name: "Mg Salaing Win Moe     Kyaw",
    rawScore: 30
  },

  {
    name: "Mg Zin Min Khant",
    rawScore: 28
  },
  {
    name: "Mg Chit Ko Ko					",
    rawScore: 52
  },

  {
    name: "Mg Pyae Zone Aung",
    rawScore: 43
  },
  {
    name: "Mg Nyan Myo Thant",
    rawScore: 24
  },
  {
    name: "Mg Lin Htet Naing",
    rawScore: 40
  },
  {
    name: "Mg Htet Wei Maung",
    rawScore: 38
  },
  {
    name: "Mg Myo Min Naing",
    rawScore: 45
  },
  {
    name: "Mg Sithu Htet					",
    rawScore: 50
  },

  {
    name: "Mg Aung Kyaw Kyaw",
    rawScore: 26
  },
  {
    name: "Mg Thurein Lin					",
    rawScore: 32
  },
  {
    name: "Mg Shein Thet Naung",
    rawScore: 49
  },
  {
    name: "Mg Kyaw Kyaw Naing",
    rawScore: 43
  },
  {
    name: "Mg Hein Thu Zaw",
    rawScore: 31
  },

  // Find Mg(380)
  {
    name: "Mg Phyoe Thwin Htoo",
    rawScore: 58
  },
  {
    name: "Mg Aung Myint Myat	",
    rawScore: 50
  },

  {
    name: " Ma Ei Ei Mon					",
    rawScore: 23
  },

  {
    name: " Ma Thu Hlaing Phyoe	",
    rawScore: 35
  },

  {
    name: " Ma Aye Sanda Lin				",
    rawScore: 43
  },

  {
    name: " Ma Poe Ei Phyu		",
    rawScore: 58
  },

  {
    name: " Ma Yamin Thuzar Aung",
    rawScore: 39
  },

  {
    name: " Ma Thae Su Mon	",
    rawScore: 55
  },

  {
    name: " Ma New Ni Lin	    ",
    rawScore: 57
  },

  {
    name: " Ma Yadana Aung	",
    rawScore: 41
  },

  {
    name: " Ma Yun Khin Khin				",
    rawScore: 38
  },

  {
    name: " Ma Su Myat Soe				",
    rawScore: 35
  },

  {
    name: " Ma Chaw E Thin				",
    rawScore: 32
  },

  {
    name: " Ma Hnin Pa Pa Myo	",
    rawScore: 29
  },

  {
    name: " Ma Nyo Le Ye Oo			",
    rawScore: 44
  },

  {
    name: " Ma Ein Thu			",
    rawScore: 57
  },
  {
    name: " Ma Le Le Hnin	",
    rawScore: 59
  },

  {
    name: " Ma Win Win Aye				",
    rawScore: 41
  },

  {
    name: " Ma Htin Htin Hpway",
    rawScore: 55
  },

  {
    name: "Ma Zin Mar New",
    rawScore: 33
  },
  {
    name: " Ma Yadana Phyoe					",
    rawScore: 43
  },

  {
    name: " Ma Paing Mont Kyu			",
    rawScore: 34
  },

  {
    name: " Ma Ei Phyoe Lwin				",
    rawScore: 43
  },

  {
    name: " Ma Ingin Khaing					",
    rawScore: 40
  },

  {
    name: " Ma Naw Sei Balu Phaw",
    rawScore: 39
  },

  {
    name: " Ma Nay Thu Aye	",
    rawScore: 47
  },
  {
    name: " Ma Htet Ei Aung   ",
    rawScore: 39
  }
];

// const getReadingLevel = rawScoresArray => {
//   const rawScore = this.rawScoresArray;
//   rawScore =>
//     rawScore < 16 ? (
//       <tr>
//         <td><b>A</b></td>
//       </tr>
//     ) : rawScore >= 16 && rawScore <= 22 ? (
//       "A1"
//     ) : rawScore >= 23 && rawScore <= 31 ? (
//       "A2"
//     ) : rawScore >= 32 && rawScore <= 41 ? (
//       "B1"
//     ) : rawScore >= 42 && rawScore <= 52 ? (
//       "B2"
//     ) : rawScore >= 53 && rawScore <= 61 ? (
//       "B3"
//     ) : rawScore >= 62 && rawScore <= 69 ? (
//       "C1"
//     ) : rawScore >= 70 && rawScore <= 75 ? (
//       "C2"
//     ) : rawScore >= 76 ? (
//       "C3"
//     ) : (
//       "run another function"
//     );
// };

class ReadingLevel extends Component {
  rawScoresArray = students.map(student => (
    <tr>
      <td>
        <b>{student.rawScore}</b>
      </td>
    </tr>
  ));
  rawScoresNameArray = students.map(student => (
    <tr>
      <td>
        <b>{student.name}</b>
      </td>
    </tr>
  ));

  readingLevelArray = students.map(student => {
    const rawScore = student.rawScore;

    if (rawScore < 23) {
      return (
        <tr>
          {" "}
          <td>
            <b>
              {" "}
              <b> F </b>
            </b>
          </td>
        </tr>
      );
    } else if (rawScore >= 23 && rawScore <= 32) {
      return (
        <tr>
          <td>
            <b>A1</b>
          </td>
        </tr>
      );
    } else if (rawScore >= 33 && rawScore <= 45) {
      return (
        <tr>
          <td>
            <b>A2 </b>
          </td>
        </tr>
      );
    } else if (rawScore >= 46 && rawScore <= 59) {
      return (
        <tr>
          <td>
            <b>B1 </b>
          </td>
        </tr>
      );
    } else if (rawScore >= 60 && rawScore <= 76) {
      return (
        <tr>
          <td>
            <b>B2 </b>
          </td>
        </tr>
      );
    } else if (rawScore >= 77 && rawScore <= 89) {
      return (
        <tr>
          <td>
            <b>B3 </b>
          </td>
        </tr>
      );
    } else if (rawScore >= 90 && rawScore <= 100) {
      return (
        <tr>
          <td>
            <b>C1 </b>
          </td>
        </tr>
      );
    } else if (rawScore >= 101 && rawScore <= 109) {
      return (
        <tr>
          <td>
            <b>C2 </b>
          </td>
        </tr>
      );
    } else if (rawScore >= 110) {
      return (
        <tr>
          <td>
            <b>C3 </b>
          </td>
        </tr>
      );
    } else {
      return;
      <tr>
        <td>
          <b>run another function</b>
        </td>
      </tr>;
    }
  });

  standingScore = students.map(student => {
    const rawScore = student.rawScore;
    if (rawScore === 15 || rawScore === 16) {
      return (
        <tr>
          <td>
            <b> 5</b>
          </td>
        </tr>
      );
    } else if (
      rawScore === 17 ||
      rawScore === 18 ||
      rawScore === 19 ||
      rawScore === 20
    ) {
      return (
        <tr>
          <td>
            <b>6</b>
          </td>
        </tr>
      );
    } else if (rawScore === 21 || rawScore === 22) {
      return (
        <tr>
          <td>
            <b>7</b>
          </td>
        </tr>
      );
    } else if (rawScore === 23 || rawScore === 24 || rawScore === 25) {
      return (
        <tr>
          <td>
            <b>8</b>
          </td>
        </tr>
      );
    } else if (rawScore === 26 || rawScore === 27) {
      return (
        <tr>
          <td>
            <b>9</b>
          </td>
        </tr>
      );
    } else if (rawScore === 28 || rawScore === 29 || rawScore === 30) {
      return (
        <tr>
          <td>
            <b>10</b>
          </td>
        </tr>
      );
    } else if (rawScore === 31 || rawScore === 32) {
      return (
        <tr>
          <td>
            <b>11</b>
          </td>
        </tr>
      );
    } else if (rawScore === 33 || rawScore === 34) {
      return (
        <tr>
          <td>
            <b>12</b>
          </td>
        </tr>
      );
    } else if (rawScore === 35 || rawScore === 36 || rawScore === 37) {
      return (
        <tr>
          <td>
            <b>13</b>
          </td>
        </tr>
      );
    } else if (rawScore === 38 || rawScore === 39) {
      return (
        <tr>
          <td>
            <b>14</b>
          </td>
        </tr>
      );
    } else if (rawScore === 40 || rawScore === 41) {
      return (
        <tr>
          <td>
            <b>15</b>
          </td>
        </tr>
      );
    } else if (rawScore === 42 || rawScore === 43) {
      return (
        <tr>
          <td>
            <b>16</b>
          </td>
        </tr>
      );
    } else if (rawScore === 44 || rawScore === 45) {
      return (
        <tr>
          <td>
            <b>17</b>
          </td>
        </tr>
      );
    } else if (rawScore === 46 || rawScore === 47 || rawScore === 48) {
      return (
        <tr>
          <td>
            <b>18</b>
          </td>
        </tr>
      );
    } else if (rawScore === 49 || rawScore === 50) {
      return (
        <tr>
          <td>
            <b>19</b>
          </td>
        </tr>
      );
    } else if (rawScore === 51 || rawScore === 52) {
      return (
        <tr>
          <td>
            <b>20</b>
          </td>
        </tr>
      );
    } else if (rawScore === 53) {
      return (
        <tr>
          <td>
            <b>21</b>
          </td>
        </tr>
      );
    } else if (rawScore === 54 || rawScore === 55) {
      return (
        <tr>
          <td>
            <b>22</b>
          </td>
        </tr>
      );
    } else if (rawScore === 56 || rawScore === 57) {
      return (
        <tr>
          <td>
            <b>23</b>
          </td>
        </tr>
      );
    } else if (rawScore === 58 || rawScore === 59) {
      return (
        <tr>
          <td>
            <b>24</b>
          </td>
        </tr>
      );
    } else if (rawScore === 60 || rawScore === 61) {
      return (
        <tr>
          <td>
            <b>25</b>
          </td>
        </tr>
      );
    } else if (rawScore === 62 || rawScore === 63) {
      return (
        <tr>
          <td>
            <b>26</b>
          </td>
        </tr>
      );
    } else if (rawScore === 64) {
      return (
        <tr>
          <td>
            <b>27</b>
          </td>
        </tr>
      );
    } else if (rawScore === 65 || rawScore === 66) {
      return (
        <tr>
          <td>
            <b>28</b>
          </td>
        </tr>
      );
    } else if (rawScore === 67 || rawScore === 68) {
      return (
        <tr>
          <td>
            <b>29</b>
          </td>
        </tr>
      );
    } else if (rawScore === 69) {
      return (
        <tr>
          <td>
            <b>30</b>
          </td>
        </tr>
      );
    } else if (rawScore === 70 || rawScore === 71) {
      return (
        <tr>
          <td>
            <b>31</b>
          </td>
        </tr>
      );
    } else if (rawScore === 72 || rawScore === 73) {
      return (
        <tr>
          <td>
            <b>32</b>
          </td>
        </tr>
      );
    } else if (rawScore === 74) {
      return (
        <tr>
          <td>
            <b>33</b>
          </td>
        </tr>
      );
    } else if (rawScore === 75 || rawScore === 76) {
      return (
        <tr>
          <td>
            <b>34</b>
          </td>
        </tr>
      );
    } else if (rawScore === 77) {
      return (
        <tr>
          <td>
            <b>35</b>
          </td>
        </tr>
      );
    } else if (rawScore === 78) {
      return (
        <tr>
          <td>
            <b>36</b>
          </td>
        </tr>
      );
    } else if (rawScore === 79 || rawScore === 80) {
      return (
        <tr>
          <td>
            <b>37</b>
          </td>
        </tr>
      );
    } else if (rawScore === 81) {
      return (
        <tr>
          <td>
            <b>38</b>
          </td>
        </tr>
      );
    } else if (rawScore === 82 || rawScore === 83) {
      return (
        <tr>
          <td>
            <b>39</b>
          </td>
        </tr>
      );
    } else if (rawScore === 84) {
      return (
        <tr>
          <td>
            <b>40</b>
          </td>
        </tr>
      );
    } else if (rawScore === 85) {
      return (
        <tr>
          <td>
            <b>41</b>
          </td>
        </tr>
      );
    } else if (rawScore === 86) {
      return (
        <tr>
          <td>
            <b>42</b>
          </td>
        </tr>
      );
    } else if (rawScore === 87 || rawScore === 88) {
      return (
        <tr>
          <td>
            <b>43</b>
          </td>
        </tr>
      );
    } else if (rawScore === 89) {
      return (
        <tr>
          <td>
            <b>44</b>
          </td>
        </tr>
      );
    } else if (rawScore === 90) {
      return (
        <tr>
          <td>
            <b>45</b>
          </td>
        </tr>
      );
    } else if (rawScore === 91) {
      return (
        <tr>
          <td>
            <b>46</b>
          </td>
        </tr>
      );
    } else if (rawScore === 92) {
      return (
        <tr>
          <td>
            <b>47</b>
          </td>
        </tr>
      );
    } else if (rawScore === 93) {
      return (
        <tr>
          <td>
            <b>48</b>
          </td>
        </tr>
      );
    } else if (rawScore === 94) {
      return (
        <tr>
          <td>
            <b>49</b>
          </td>
        </tr>
      );
    } else if (rawScore === 95 && rawScore === 96) {
      return (
        <tr>
          <td>
            <b>50</b>
          </td>
        </tr>
      );
    } else if (rawScore === 97) {
      return (
        <tr>
          <td>
            <b>51</b>
          </td>
        </tr>
      );
    } else if (rawScore === 98) {
      return (
        <tr>
          <td>
            <b>52</b>
          </td>
        </tr>
      );
    } else if (rawScore === 99) {
      return (
        <tr>
          <td>
            <b>53</b>
          </td>
        </tr>
      );
    } else if (rawScore === 100) {
      return (
        <tr>
          <td>
            <b>54</b>
          </td>
        </tr>
      );
    } else if (rawScore === 101) {
      return (
        <tr>
          <td>
            <b>55</b>
          </td>
        </tr>
      );
    } else if (rawScore === 102) {
      return (
        <tr>
          <td>
            <b>56</b>
          </td>
        </tr>
      );
    } else if (rawScore === 103) {
      return (
        <tr>
          <td>
            <b>57</b>
          </td>
        </tr>
      );
    } else if (rawScore === 104) {
      return (
        <tr>
          <td>
            <b>59</b>
          </td>
        </tr>
      );
    } else if (rawScore === 105) {
      return (
        <tr>
          <td>
            <b>60</b>
          </td>
        </tr>
      );
    } else if (rawScore === 106) {
      return (
        <tr>
          <td>
            <b>61</b>
          </td>
        </tr>
      );
    } else if (rawScore === 107) {
      return (
        <tr>
          <td>
            <b>62</b>
          </td>
        </tr>
      );
    } else if (rawScore === 108) {
      return (
        <tr>
          <td>
            <b>63</b>
          </td>
        </tr>
      );
    } else if (rawScore === 109) {
      return (
        <tr>
          <td>
            <b>64</b>
          </td>
        </tr>
      );
    } else if (rawScore === 110) {
      return (
        <tr>
          <td>
            <b>65</b>
          </td>
        </tr>
      );
    } else if (rawScore === 111) {
      return (
        <tr>
          <td>
            <b>67</b>
          </td>
        </tr>
      );
    } else if (rawScore === 112) {
      return (
        <tr>
          <td>
            <b>68</b>
          </td>
        </tr>
      );
    } else if (rawScore === 113) {
      return (
        <tr>
          <td>
            <b>69</b>
          </td>
        </tr>
      );
    } else if (rawScore === 114 || rawScore > 114) {
      return (
        <tr>
          <td>
            <b>70</b>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>
            <b>TBI</b>
          </td>
        </tr>
      );
    }
  });

  render() {
    return (
      <div>
        <div>
          {/* <form action="">
            <input type="text" placeholder="Name " />
            <input type="text" placeholder="Raw Score" />
            <button action="submit">Submit</button>
          </form> */}

          <div className="todolistMain">
            <div className="header">
              {/* <form onSubmit={this.sayHi}>
                <input
                  ref={a => (this._inputElement = a)}
                  placeholder="Enter Name"
                />
                <input
                  ref={b => (this._inputElement = b)}
                  placeholder="Enter Raw Score"
                />
                <button type="submit">Submit</button>
              </form> */}
            </div>
            {/* <TodoItems entries={this.state.items} delete={this.deleteItem} /> */}
          </div>
          {/* <Todolist /> */}
        </div>
        <div className="table-container">
          <table>
            <tr>
              <th>Name</th>
              <th>Raw Score</th>
              <th>Standing Score</th>
              <th>Reading Level</th>
            </tr>
            <tr>
              <td>
                <b>{this.rawScoresNameArray}</b>
              </td>
              <td>
                <b>{this.rawScoresArray}</b>
              </td>
              <td>
                <b>{this.standingScore} </b>
              </td>{" "}
              <td>
                <b> {this.readingLevelArray} </b>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ReadingLevel;

// Find Mg Phyoe Thwin Htoo row(380)
//         {
//         name: "Mg Phyoe Thwin Htoo"

// rawScore :
//  },

//  Find Mg Thurein Lin score (376 row)
//         ,
