<h1> Node.js </h1>

<p>I am currently going through a Node.JS course on Udemy, it has a 4.7/5 rating and has been done by over 135,000 people.</p>

<a href="https://www.udemy.com/the-complete-nodejs-developer-course-2">The course is linked here</a>

<p>Node is a backend language written with JavaScript.</p>

<p>The course is 34.5 hours long, with frequent challenges and guides you through building 4 projects.</p>

<h2> App 2 - weather app </h2>
<p>App 2 is now built *weather-app folder*
The user can add type in a physical location. It will output:<p>
<ul>
    <li> The detailed location (county, country, state)</li> 
    <li> How cloudy it is</li> 
    <li> The current temperature</li> 
    <li> The chance of rain</li> 
</ul>

<p> Instructions: open folder and cd into weather-app directory. In the command line type 
node app.js [location]. For example if I do 'node app.js London', the output is: London, Greater London, England, United Kingdom
Partly cloudy throughout the day. It is currently 68.23 degress out. There is a 0% chance of rain. </p>

<h2> App 1 - notes taking app </h2>
<p>App 1 is now built *note-app folder*
The user can add a note, remove a note, list all notes or read a note.<p>

<table>
    <tr>
        <th>Function   </th>
        <th>Terminal command</th>
    </tr>
    <tr>
        <td>Add:</td>
        <td>node app.js add --title="(title of note)" --body="(main text of the note)"</td>
    </tr>
    <tr>
        <td>Remove:</td>
        <td>node app.js remove --title"(title of note)"</td>
    </tr>
    <tr>
        <td>List:</td>
        <td>node app.js list</td>
    </tr>
    <tr>
        <td>Read:</td>
        <td>node app.js read --title="(title of note)"</td>
    </tr>
</table>