# Calendar Views

---

## Calendly

### Providers:
	[Providers must make their own Calendly account](https://calendly.com/event_types/user/me) <br />

### Patients:
	Easiest option for the patient <br />
	See demo in: localhost:8000/

#### Pros:
	1. Easiest most flexible for Patients to book <br />
	2. Easier implementation for developers (simple)  <br />
	3. Syncs with google/outlook/icloud calendars

#### Cons:
	Providers must get a calendly account, independently from us <br />
	- We would grab needed information *from* their existing accounts (oauth) <br />

	Only paid accounts can have: <br />
	- More than one event type 
	- Group meetings scheduling
	- Paypal integration

---
## Google
### Providers:
	See demo in: localhost:8000/goovider <br />
	*Setting availability here:* https://calendar.google.com/calendar/r?tab=mc <br />

### Patients:
	Would need to have google account to access the "nice" scheduling options <br />
	See demo in: localhost:8000/googlatient <br />

#### Pros:
	1. Easier implementation for developers (most is already done)
	2. Syncs with google - Wide reach, a lot of people use google
	

#### Cons:
	1. Providers would NEED a GSuite account to access "appointments" feature or "working hours" feature
		1.1 If using "appointments" feature, patients would NEED a gmail account
	2. Providers must go to outside of our website to edit their calendar/ set their availability 
	3. Providers/patients WITHOUT a google account wouldn't be able to book
