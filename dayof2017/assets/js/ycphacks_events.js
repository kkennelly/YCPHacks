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
    [16, 18, "Hacker Check-in", "Willman Business Center Lobby", 0 ],
	[16, 18, "Sponsor Check-in", "Willman Business Center Lobby", 0 ],
	[18, 19, "Opening Ceremonies", "Weinstock Auditorium", 0],
	[19, 20, "Dinner" , "Yorkview Hall", 2],
	[20, 57, "Hacking Begins!", " ", 0 ],
	[20, 20.5, "Team Building Activities", "TBD", 0],
	[20.5, 21, "Idea Building", "TBD", 0],
	[21, 21.5, "WTF Workshop", "TBD", 0],
	[22, 23, "Arduino Tutorial", "TBD", 0],
	[22, 23, "Arduino Tutorial", "TBD", 1, "Intro to Arduinos"],
	[24, 25, "Midnight Nerf War", "TBD", 0],
	[26, 27, "Trivia/Text Games", "TBD", 0],
	[31, 33, "Breakfast", "Yorkview Hall", 2],
	[34, 34.5, "Lightning Talk", "TBD", 0],
	[35, 38.5, "Animals", "Outside", 0],
	[36, 37.5, "Lunch", "Yorkview Hall", 2],
	[38, 38.5, "Robotics Tutorial", "TBD", 0],
	[39.5, 40, "Lightning Talk - Disruption", "TBD", 0],
	[41, 42, "Cup Stacking", "TBD", 0],
	[42.5, 43, "Pi to High Rise", "TBD", 0],
	[43, 44, "Dinner", "Yorkview Hall", 2 ],
	[45, 46, "Drone workshop", "TBD", 0 ],
	[46, 47, "Jonathan Kinglsey Talk", "TBD", 0],
	[48, 49, "Midnight Whoopie Pies", "TBD", 0],
	[48, 49, "Tutorial After the Pi(Data)", "TBD", 0],
	[55, 57, "Breakfast", "Yorkview Hall", 2],
	[57, 58, "Hacking Ends", "-", 0],
	[58, 60, "Presentations & Judging", "TBD", 0],
	[60, 61, "Closing Ceremonies", "TBD", 0]
];
