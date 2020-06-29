# Calendar Views

---

## [Calendly](https://calendly.com/)

### Providers:
[Providers must make their own Calendly account](https://calendly.com/event_types/user/me) 
which has limited functionality, unless it is paid <br />
<br/>
Only paid accounts can have: <br />
- More than one event type 
- Group meetings scheduling
- Paypal integration

### Patients:
Easiest option for the patient <br />
See demo in: localhost:8000/

#### Pros:
1. Easiest most flexible for Patients to book <br />
1. Easier implementation for developers (simple)  <br />
1. Syncs with google/outlook/icloud calendars

#### Cons:
Providers must get a calendly account, independently from us <br />
- We would grab needed information *from* their existing accounts (oauth) <br />

2 options, for most of these kinds of services:
- Each provider must get their own account (paid or otherwise)
- Get a "parent account," as if all providers worked under the same organization

---
## Google
### Providers:
See demo in: localhost:8000/goovider <br />
[Setting availability here](https://calendar.google.com/calendar/r?tab=mc)<br />

### Patients:
Would need to have google account to access the "nice" scheduling options <br />
See demo in: localhost:8000/googlatient <br />

#### Pros:
1. Easier implementation for developers (most is already done, just need OAuth)
1. Syncs with google - Wide reach, a lot of people use google
	

#### Cons:
1. Providers would NEED a GSuite account to access "appointments" feature or "working hours" feature
	1.1 If using "appointments" feature, patients would NEED a gmail account
1. Providers must go to outside of our website to edit their calendar/ set their availability (CONFIRMED)
1. Providers/patients WITHOUT a google account wouldn't be able to book (we can work around this with [this](https://stackoverflow.com/questions/42022277/google-calendar-event-created-updated-deleted-webhook) and [this](https://stackoverflow.com/questions/53769664/how-do-i-setup-webhooks-in-google-calendar-to-notify-the-users-x-minutes-before))

---
## [FullCalendar](https://fullcalendar.io/)
### Providers:
See demo in: fullcalendar_experiment folder <br />
No need to create any weird accounts <br/ >

### Patients:
No need to create extra accounts <br />

#### Pros:
1. No need to create extra accounts for anyone
	1.1 Can remain "sticky"
1. Very flexible. Can implement all the features we want.
1. Can be synced to google calendar
1. Free & Open Source!

#### Cons:
1. Only has google calendar integration (no outlook/ical)
1. The functions are there, but most features have to be implemented by us (Time consuming)

---
## [DHTMLX](https://dhtmlx.com/docs/products/dhtmlxScheduler/)
### Providers:
See demo in:  honestly was going to upload something but, the demos in their website are so much better and plentiful <br />
No need to create any weird accounts <br/ >

### Patients:
No need to create extra accounts <br />

#### Pros:
1. No need to create extra accounts for anyone
1. Can be synced to google calendar
1. Has all ideal features (blocked off days/business hours) already made <br/>
(would need to put it together, of course)

#### Cons:
1. Price? I'm not very clear about their kinds of licenses (paid unless open source it seems)
