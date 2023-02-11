# Generate Google Form

This is a Google Sheet add-on that generates surveys for lectures from schedules. It reads the schedule from the sheet and, with the user selection of desired fields, creates a form with questions regarding each lecture. It also adds general questions about the seminar. It is primarily written for seminars in Petnica Science Center

## Setup
The setup steps are for a project that has no organization in Google Cloud. If an organization exists, then in the "In apps script editor" deploy should not be Test deployment, and in the "In Google Cloud" section users need to be added in another way.


### In Google Cloud

1. Create a new project.
2. Enable APIs:  Go to Dashboard -> Add people and add users that need to execute the script. Next is to enable "Google Drive API" by typing the name in the search bar ("Google Sheets API" is not necessary).
3. OAuth: Go to APIs and Services -> OAuth consent screen and fill it with details. In the "Test users" section add users that need access to the script.
4. Project ID: Go back to the Dashboard and copy the project ID for the Apps Script editor.

### In Apps Script editor

1. Create Apps Script files: Go to Google Sheets and click on Extensions -> Apps Script.
2. Copy code from the repository: When the editor shows up, replace existing code with code from this repository (and create additional files)
3. Enable services: In "Services" add "Google Sheets API" and "Drive API".
4. Create deployment: Go to Deploy -> Test Deployments and add a new test with the desired file from which the schedule will be read.
5. Change project: Go to settings and click "Change project". Paste project ID from google cloud (step 4 in "In Google Cloud" section)


When Google Sheets file from the test deployment is open, a new tab should show in the toolbar. On the first run, authentication is required.

## Usage

When google sheet with test deploy is opened, the toolbar will appear with the "Petnica" tab. In the dropdown menu, select "Generate survey". 
First, the sidebar will appear. The sidebar shows selected fields for further processing. On pressing the "next" button, a dialog will open with a full list of selected lectures, excluding breakfast, lunch, and dinner. When desired lectures are selected, press the "next" button and the form will be generated. In the end, a dialog with two links will show: 
  1. Publish link: link for attendees to form
  2. Edit link: link for changing form and viewing results

The created form is saved in the same directory on Google Drive, as where the original Google Sheet file was.
