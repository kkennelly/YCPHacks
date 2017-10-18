/* -------------------------------------------------------------
 * YCP Hacks Event List Specification
 * -------------------------------------------------------------
 * YCP_EVTS_YEAR is the year these events take place on.
 * YCP_EVTS is an array of 5-tuples:
 *
 * [0] --> start time relative to midnight Saturday (in hours)
 * [1] --> end time ""
 * [2] --> Brief event title/description
 * [3] --> Brief location of the event
 * [4] --> event type
 *           0: general event
 *           1: workshop/tech talk/etc
 *           2: food event
 */
var YCP_EVTS_YEAR = 2017;
var YCP_EVTS = [
    [16, 18, "Hacker Check-in", "Willman Business Center Lobby", 0 ], 		// 4pm - 6pm
	[16, 18, "Sponsor Check-in", "Willman Business Center Lobby", 0 ],		// 4pm - 6pm
	[18, 19, "Opening Ceremonies", "Weinstock Auditorium", 0],				// 6pm - 7pm
	[19, 20, "Dinner" , "Yorkview Hall", 2],								// 7pm - 8pm
	[20, 57, "Hacking Begins!", " ", 0 ],									// 8pm - 9am Or whenever really
	[20, 20.5, "Team Building Activities", "Room 408", 0],						// 8pm - 8:30pm
	[20, 20.5, "Team Building Activities", "Room 408", 1, 'Don’t have a team to create Your project? Want to build A stronger relationship with Your team? Come spend to this event for fun games and icebreakers!'],
	[20.5, 21, "Idea Building", "Room 408", 0],									// 8:30pm - 9pm
	[20.5, 21, "Idea Building", "Room 408", 1, 'It is very hard to come up with your own ideas and put them into action. Prof. Patnode will about how to develop ideas and make them work.'],	
	[21, 21.5, "WTF Workshop", "Room 310", 0],									// 9pm
	[21, 21.5, "WTF (Where to Find) Workshop", "Room 310", 1, 'Felix and nick will talk about the basic places to find answers to development questions. The will also touch base on the resources we have provided for you at this event'],
	[22, 23, "Arduino Tutorial", "Room 310", 0],									// 10pm - 11pm
	[22, 23, "Arduino Tutorial", "Room 310", 1, "This is a workshop about the basics and more advanced features of the arduino. You can use these tools in your project or in the future!"],
	[24, 25, "Midnight Nerf War", "Room 310", 0],								//12am - 1am
	[26, 27, "Trivia/Text Games", "TBD", 0],								// 2am - 3am
	[31, 33, "Breakfast", "Yorkview Hall", 2],								// 7am - 8am
	[31, 32, "Yoga", "Room 408", 0],
	[34, 34.5, "Science Fiction - Fact & Future", "Room 310", 0],									// 10am - 10:30am
	[34, 34.5, "Science Fiction - Fact & Future", "Room 310", 1, "Have you noticed the old futuristic movies have actually been true, like driving cars? Professor Hake will talk about the development of technology in the world today."],
	[35, 38.5, "Animals", "Outside", 0],									// 11am - 2:30pm
	[36, 37.5, "Lunch", "Yorkview Hall", 2],								// 12pm - 1:30pm
	[38, 38.5, "Robotics Tutorial", "Room 310", 0],								// 2pm - 2:30pm
	[38, 38.5, "Robotics Tutorial", "Room 310", 1, ""],		
	[39.5, 40, "Lightning Talk - Disruption", "Room 314", 0],					// 3:30pm - 4pm
	[39.5, 40, "Lightning Talk - Disruption", "Room 314", 1, ""],
	[40, 41, "Drone Tutorial", "Room 310", 0 ],
	[40, 41, "Drone Tutorial", "Room 310", 1, "Anyone know how to control a drone or how it works? Dr.Wilkerson and Dr. Forsyth will teach you about drones and their basic functions." ],
	[41, 42, "Cup Stacking", "Room 408", 0],
	[42.5, 43, "Pi to High Rise", "Room 314", 0],
	[42.5, 43, "Pi to High Rise", "Room 314", 1, "Dr. Norrie will give a lightning talk about how to take the basic skills you learned here, like functions of the Raspberry Pi, to create bigger and better things."],
	[43, 44, "Dinner", "Yorkview Hall", 2 ],
	[46, 47, "So I Heard You Like Engineering...", "Weinstock Auditorium", 0],
	[48, 49, "Midnight Whoopie Pies", "TBD", 0],
	[55, 57, "Breakfast", "Yorkview Hall", 2],
	[57, 58, "Hacking Ends", "-", 0],
	[57.182, 58, "Pitch Tutorial", "Room 408", 0],
	[58, 60, "Presentations & Judging", "Weinstock Auditorium", 0],
	[60, 61, "Closing Ceremonies", "Weinstock Auditorium", 0]
];
