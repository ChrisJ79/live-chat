import React from 'react';
import { CTX } from './Store';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
  	padding: theme.spacing(3,2),
  	margin: '50px',
  },
  flex: {
  	display: 'flex',
  	alignItems: 'center'
  },
  topicsWindow: {
  	width: '30%',
  	height: '300px',
  	borderRight: '1px solid grey'
  },
  chatWindow: {
	width: '70%',
	height: '300px',
	padding: '20px'
  },
  chatBox: {
	width: '80%'
  },
  button: {
	width: '20%'
  },
  textField: {
  	width: '100%'
  }
}));


export default function AppPaper() {
	const classes = useStyles();

  // CTX Store
 	const [allChats] = React.useContext(CTX);

 	console.log({allChats});

	const topics = Object.keys(allChats);

	// Local State
 	const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
 	const [textValue, changeTextValue] = React.useState('');

	return (
		<div>
			<Paper elevation={3} className={classes.root}>
				<Typography variant="h2" component="h2">
					Chat App
				</Typography>			
				<Typography variant="p">
					An Interactive Chat app using React.js, Socket.io, and Express.  <br/>Styled with Material-UI.
				</Typography>
				<br/>				
				<hr/>				
				<Typography variant="h4">
					{activeTopic}
				</Typography>
				<div className={classes.flex}>
					<div className={classes.topicsWindow}>
						<list>
							{
								topics.map(topic => (
						        	<ListItem onClick={e => changeActiveTopic(e.target.innerText)}key={topic} button>
										<ListItemText primary={topic} />          	
									</ListItem>
								))
							}
						</list>	
					</div>				
					<div className={classes.chatWindow}>
						{
							[{from: 'user', msg: 'hello'}].map((chat, i) => (
					        	<div className={classes.flex} key={i}>
					        		<Chip label={chat.from} className={classes.chip} />
		    							<Typography variant="p">
											{chat.msg}
										</Typography>
					        	</div>
							))
						}
					</div>
				</div>
				<div className={classes.flex}>
					<div className={classes.chatBox}>
						<TextField 
							label="Type Your Message Here..." 
							className={classes.textField}
							onChange={e => changeTextValue(e.target.value)}
							value={textValue}
						/>
					</div>				
					<div className={classes.button}>

						<Button variant="contained" color="primary">
						  Submit
						</Button>
					</div>
				</div>

			</Paper>
		</div>
	);
}










