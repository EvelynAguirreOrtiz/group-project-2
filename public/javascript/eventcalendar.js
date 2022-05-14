const express = require('express');
const { json } = require('express/lib/response');
const { google } = require('googleapis');
  
const app = express();
  
const SCOPES = 'https://www.googleapis.com/auth/calendar'; // full access to edit calendar
const GOOGLE_PRIVATE_KEY="<MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDU1Wm9Fzzx8Lj4\niWN2vk/7DC2qp9XzjuBZi5C6WH+3o41V7y7uyb+E99s0syvmaFE8qgx7MefX3sh7\neGKlV/iDFyhFEhs1JEq21EwJ31qY0paVaJAvGXnAHMXitV1hh+XkQBHyrcbba/ws\nGymqMkjjrkQ6jGYWLn7WYlW7eXHr3Qi0UfSLMoWUL2R0yFBGAzbGo2VIcGG/KB6L\nbHy++9HAA1ZL8NJFtzqt9ty8TUWk9R6Z17wvUwvrLPh6Hs6QEUQYdkP/4lHZ2G92\neFO03eMbPKL1v0o21clWptuEqljovBHnogcKDd02YwL2fINtf/oRr10yxmgNgAmT\nMr7Xm19rAgMBAAECggEAB9sUuxEHg9qhyTKxBCoEI70QVnM5d3L3nvaC0g4AMNQN\nnHVmoxO5SPwpECno3elNzlJsgYOXDiW/+qa35Wh42MXbC6mebXi4dUUixV6EJo3n\nVv50C/kBwHCPcU3Gc5ojhyhCQVXeuCylMy+ReyG+BQFirVKPVhRDREB+75uM8+q0\ncxl8vmtHePnY/9kUxBTKPxXmdWez3CVv1AEgXPReEORbWL/AZY7/II8KPTKzRIeR\nS/b+IaKWbsgKJK28eOHoJEU7vAjZeNW4NAlFNh+GxI4idhHAL/7N3kqsS3DV3GmA\nmYB2AGaiRDBI9amHLxIR6TwRkdcgBPgRTI0hxN3b6QKBgQDrXCH2dFD7tCzqaXxN\n2fu8c4xCImw/iLvsB9T+4X/JZSuyUH5puLGmQYATnvY8h8D0P6FmYd7RpgcpMEAo\nuzK0z5vOGj7GNlXqHHi2KSaxXHlQe0g6rhj9seQ2M2A6OsCj0Yk0OyOYnGUMrHlQ\nJdJ0oZ5Rg8817zNOupxEIRej5QKBgQDnf4/+8iftHZF0QXkHD7AHTUEYARCX6QfE\nuQpG7nIVIfeucrSkT7SMUmmUEbSJ/ULJx7boNAgrTybFKKb3QReZUc8i5hsvLX2K\n/IBiBz7g4h7BrtPzhDAOupwP4An0o62lAtRnnkW9Q+UTm/puzFw/IpodXdPCCR/v\nltKOZbNhDwKBgEHdEpQJkPAfR8KBqouOyOe/3ixTvb854Hz45B4/tKcDbOsFo5qq\nWOyRv+m9vmLKCrFPbTddhCFfOPnJyuqbGGGJB6zxo0eMxRYyyYUQlwdjPX/MQDZL\nqiq0sYyJbBBfiLFPXfoD4r4+ZfjZ+0j2jKKe59Mf88jAG7eYeUqHiDoRAoGAI68A\nDTZafSxPnXHyK+p5IccAv6h6XFApSGOVd/WNVECWIye/PIyksfSKHa7U+2g0gVHt\nmcFbeQGMYluv0PERqCp6GVEK46zJa0EcsP+Y66UvRH+kYCcCGWMeZzwLjNAmFgdn\nokk9Sr1KdElYwvdxSLIWu2wZFhG+AHppHlYC3nUCgYAGxW3rcd6Y57K3N4po4l3d\n9o/IDf4wVwwKAei6tP+oZOH78ie+nYwEKP/zhvSWJV63wRc03HKOvTX9iLCPPAy0\nyfJ2kNqrS+SI9U5vAg8vzy+0JG3w1z2GnKQONGtcPSX5/HownkX3dTN0LOm1gjFd\nFD+/imTmXmAHY5qm3yYkHQ==>"
const GOOGLE_CLIENT_EMAIL = "<meetupsa@project-2-meetupsa.iam.gserviceaccount.com >"
const GOOGLE_PROJECT_NUMBER = "<87449494441 >"
const GOOGLE_CALENDAR_ID = "<lr3td66i84tkmaf2o8j10euu70@group.calendar.google.com >"
  
  
const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
);
  
const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
});
  
app.get('/', (req, res) => {
  
  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify({ events: result.data.items }));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  });
});
  
app.listen(3001, () => console.log(`App listening on port 3001!`));