import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
  	padding: theme.spacing(3,2),
  	margin: '50px',

  },
}));


export default function SimplePaper() {
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
		</Paper>
    </div>
  );
}










