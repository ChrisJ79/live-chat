import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
  	padding: theme.spacing(3,2),
  	margin: '50px',
  },
  flex: {
  	display: 'flex'
  },
  topicsWindow: {
  	width: '30%',
  	height: '300px'
  },
  chatWindow: {
	width: '70%',
	height: '300px'
  },
  chatBox: {
	width: '80%'
  },
  button: {
	width: '20%'
  }
}));


export default function AppPaper() {
  const classes = useStyles();

  return (
    <div>
		<Paper elevation={3} className={classes.root}>
			<Typography variant="h2" component="h2">
				Chat App
			</Typography>			
			<Typography variant="p">
				An Interactive Chat app using React.js, Socket.io, and Express.  <br/>Styled with Material-UI.
			</Typography>
			<Typography variant="p">
				<br/>Topic Placeholder
			</Typography>
			<div className={classes.flex}>
				<div className={classes.topicsWindow}>

				</div>				
				<div className={classes.chatWindow}>

				</div>
			</div>
			<div className={classes.flex}>
				<div className={classes.chatBox}>

				</div>				
				<div className={classes.button}>

				</div>
			</div>

		</Paper>
    </div>
  );
}










