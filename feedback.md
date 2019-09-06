# PROJECT 2 Code Review: Michael Martinez

Technical Requirements         | Yes | No |
:--                            |:--  |:-- |
Has at least two models        |  x   |    |
A resource can be "Created"  |  x   |    |
A resource can be "Updated"  |  x   |    |
A resource can be "Deleted"  |  x   |    |
Users can sign in using an OAuth provider  |  x   |    |
Authorization middleware used to restrict functionality as applicable |     |  x  |
Is deployed to Heroku          |  x   |    |
OPTIONAL - The app consumes a third-party API |     |  x  |
OPTIONAL - A data resource is accessible on the server via an API (returns JSON)   |     |  x  |

#### Feedback:  _____________________________________________________<br>__________________________________________________________________<br>_______________________________________________________________

GitHub / Readme                                 | Yes | No |
:--                                    |:--  |:-- |
Description of application |     |  x  |
Link to deployed app | x |  |
Unsolved problems                      |     |  x  |
Link to Heroku                         |  x   |    |
Link to Trello                         |    |  x  |
OPTIONAL - The app's exposed API endpoints (routing) are documented   |     |  x  |
Frequent commits      |  x   |    |

Trello                                 | Yes | No |
:--                                    | :-- |:-- |
Wireframes                             |     |  x  |
User Stories tracked in lists  |  x   |    |
User Stories written using correct format "Role - Goal - Reason"  |  x   |    |

Application's Pages                           | Yes |  No |
:-- | :-- | :-- |
Application has logical and functional navigation |x | |
The application's pages have padding (don't touch the window) |x | |
The labels and inputs in forms are not "jagged" | |x |

HTML & views                       | Yes |  No |
:-- | :-- | :-- |
HTML is properly indented                     |  x   |     |
HTML is free of commented out or "dead code"  |  x   |     |
OPTIONAL - HTML inputs use validation (i.e. `pattern` attribute w/RegExp) as needed                 |     |  x   |


JavaScript                    | Yes |  No |
:-- | :-- | :-- |
Properly indented                   |  x   |     |
Free of commented out or "dead code"  |  x   |     |
Array iterator methods used instead of `for` loops |x | |
Arrow functions used for array iterator callbacks | |x |

MongooseJS Models                    | Yes |  No |
:-- | :-- | :-- |
Validations (including `enums`) used as needed  |     |  x   |
Default values used as needed  |    |  x  |
Bonus: Virtual properties used  |     |  x   |
Bonus: Instance and/or static methods used |x | |
Bonus: MongooseJS middleware hooks (pre/post save, etc) used | | x |


Additional Comments, Suggestions, Feedback:

#### Feedback:  

Great job flushing out the additional functionality. I love how you were able to incorporate the ability to add photos (it seemed to be a common problem amongst your peers). Having this kind of feature sets you apart and this is the kind of work we expected. 

I need to mention flushing out the README more. we want to see the plans you came up with before you start coding. Potential employers would like to see this too. A big part of landing a job is being able to demonstrate and articulate your thought process, be it verbally or through other means (i.e. your README).

You had great positioning of your HTML elements, however there should have been some padding to separate the words from the yellow border. I would recommend using a CSS framework going forward. You can still do custom CSS in conjunction, however these frame works really help with things such as navbars, footers, forms, cards(articles of like data) and buttons. I suggest Bulma CSS strictly due to the fact it has built in accessibility recognition, so it will help make everything great to the viewers eye (the goal is to keep the client on your site as long as possible, and if your color choice hurts the eyes, they will leave, and probably not come back). check out <code>material.io</code> for some take aways in regards to client design standards. Also be sure to flush out the forms, we should not being seeing the vanilla HTML5 forms.

Furthermore, I noticed you never linked your users model to the vacations model directly. That means there is no way for me, as a user, to see only my vacations. This is something you should have fixed seeing as you had the additional time to flush out the experience. 

You did great linking your other models, adding more functionality, and setting up your routes. In addition, you did a phenomenal job separating the concerns of the routes, and controllers. That was a pro move. All and all, take this as a learning experience, and apply where you fell short to the next one. Keep up the great work!




