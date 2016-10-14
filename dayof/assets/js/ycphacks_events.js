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
var YCP_EVTS_YEAR = 2016;
var YCP_EVTS = [
    [18, 20, "Hacker Check-in", "Hotel Lobby", 0 ],
	[18, 20, "Sponsor Check-in", "Hotel Lobby", 0 ],
	[19, 20, "Dinner" , "United Fiber & Data Room", 0],
	[21, 22, "Team Building Activities", "3rd Floor Rooms", 0],
	[22, 23, "Inspiration Activities", "3rd Floor Rooms", 0],
	[23, 24, "Kahoot Trivia", "3rd Floor Rooms", 0],
	[24, 25, "Midnight Snack", "United Fiber & Data Room", 0],
	[31, 33, "Breakfast", "United Fiber & Data Room", 0 ],
	[33, 36, "Meet the Sponsors", "Hotel Lobby / Hallway", 0 ],
	[36, 37.5, "Lunch", "United Fiber & Data Room", 0],
	[37.5, 38.5, "iOS Development Workshop", "Lafeyette Room", 1, " "],
	[38.5, 40.5, "Sharktank", "Lafeyette Room", 1, "Dick Heddleson and Ross Gibson from The Ben Franklin Technology Partners will work with you to refine your project and show you the next steps to turn your idea into a business"],
	[40, 41.5, "Hardware Workshop", "TBD", 1 , " "],
	[42, 43.5, "Dinner", "United Fiber & Data Room", 0],
	[44, 45, "Women In Tech Meetup", "Lafeyette Room", 0],
	[45, 46, "Cup Stacking", "TBD", 0],
	[45, 46, "Pennsylvania Hackers Meetup", "Commonwealth Room", 0],
	[46, 47, "Horrible Code Contest", "TBD"],
	[48, 49, "Midnight Snack", "United Fiber & Data Room", 0],
	[55, 56, "Breakfast", "United Fiber & Data Room", 0],
	[57, 58, "Submit Your Project!", "", 0],
	[57, 60, "Presentations & Judging", "Main Ballroom", 0],
	[60, 61, "Closing Ceremonies", "Main Ballroom", 0]
];
