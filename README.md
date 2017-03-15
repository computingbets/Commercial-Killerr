# Commercial Killerr
## GA capstone project

![CK](http://i.imgur.com/QWaiJ1M.png)

Goonies never say die! What should die, however, are commercials. This is where
the Commercial Killerr may help. It is a user powered television commercial
detection application. Enter the channel and click the red pop-up button when
there is a commercial and the indicator will let the user know when to avoid
that channel.

Commercial Killerr uses Javascript and Ruby on Rails in the front and back ends,
respectively. The front end utilized Google Fonts as well as giphs, static images, animated fonts, and imports from Soundcloud.com. What is seen on the page is both an HTML file and a relatively hefty user interface (coded modularly) that displays things like a points/minutes-killed-counter, a numerically ordered channel index, and user achievement badges. These UI features are displayed when particular JS functions are executed. The front end also takes advantage of native JS promises to essentially make asynchronous API calls execute in order.

Ruby on Rails composes the back end. This developer took advantage of and
implemented Rails-provided scaffolding. It is a dream for a front end developer
as it creates the bulk of back end necessities. One deviance from scaffolding in
this app is a custom route that allows the user to update the commercial state on
the input channel by channel number (name in the PSQL database) instead of
channel ID (another column in the PSQL database). An example of this route in
action can be seen in the app when a channel is submitted and the status buttons
pop up on screen. Another addition to the back-end is the display of the organized
channel number data. 
As mentioned, the database is a PSQL database. It contains one table. PSQL
remains a preffered database by this developer for its ease of use and simple
configuration.

There are no dependencies needed for this app.

### User Stories
As a user, I want to go to an open-ended page and put in a channel to see if it
has ads.

As a user I want to be able to indicate through buttons that a channel
being watched has ads or programming.

As a user, I want cool stuff like seeing how many ads I've killed and badges for
my commercial slaying.

### Wireframes
Proposed architecture - http://imgur.com/B6l1oNH
View/ interface - http://imgur.com/M5XDg37

This was the GA project I was most proud of making. The parts I enjoyed most
also relate to the difficulties and hurdles of the project. That is getting more
in depth. I want to work as a front end developer so focusing on the front end
proved enjoyable. I would like to go further in depth with styling and UI. I
would also like to go further with accessability with the app and give it a
multi-view feature so that a different user can benefit from the status input
and indicator features of Commercial Killerr. Ideally, the back end will have an
array with Posgres computed columns so that the database can store an array and
when 51% say there is a commercial, the indicator will switch to a commercial,
likewise for programming. Cheers!

back-end repo: https://github.com/logicmyth/capstone-back-end
