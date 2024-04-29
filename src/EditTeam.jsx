

function EditTeam() {
  return (
    <div className="p-5">
      <h1>Editing Page</h1>
    </div>
  )
}


export default EditTeam

/*
      --MUST HAVE--
Two screens : Home Screen and Edit Team Screen

Edit Team Screen:
  User should be able to add up to 4 team members
  
Home Screen:
  See the summary of the team
    see all their team members and their information

Use useContext and useReducer

      --SHOULD HAVE--
User can edit the stats for each team member
  3 stats: health, attack, speed
  Stats any number from 1 to 5
  Stats sum cant be any higher than 10

      --COULD HAVE--
Have a button that can randomly generate the stats

Have a button that randomly generates player name

      --WISH HAD--
Image for each team member avatar
 */
