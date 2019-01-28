import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import A from '../images/a.jpg';
import {Col,Row} from 'reactstrap';
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    width: '10px'
  },
  avatar: {
    margin: 10,
    width: 300,
    height: 180,
  }
});

function AlignItemsList(props) {
  const { classes } = props;
  const arr = [1,2,3,4,5];
  const listItem = arr.map((number) =>
  <ListItem alignItems="flex-start">
  <ListItemAvatar>
    <img alt="Remy Sharp" src={A} className={classes.avatar} />
  </ListItemAvatar>
  <ListItemText 
    primary={
          <p style={{fontWeight:'bold'}}>Thị trường crypto đã khởi sắc chưa ?</p> 
      }
    secondary={
      <React.Fragment>
        <Typography component="span" className={classes.inline}>
          <p style={{width:'550px'}}>Thời điểm này năm ngoái Bitcoin (BTC) được giao dịch ở mức cao kỷ lục, 
              gần 20.000 đô la. Nhưng chỉ sau đó một năm nó đã đảo chiều 
              theo hướng ngược lại khi mất đến 80% giá trị.</p>
        </Typography>
      <ListItem>
      <Row>   
        <Avatar style={{width:'40px',height:'40px'}} alt="Remy Sharp" src={A}/>          
        <p style={{paddingLeft:'10px',color:'#4682B4'}}>Hoang tran</p>
        <p style={{paddingLeft:'10px'}}>- 2 giờ trước</p> 
        <p style={{paddingLeft:'10px'}}>- 10 lượt xem</p>
      </Row>
      </ListItem>
      </React.Fragment>
    }
  />
  </ListItem>
  );
  return (
  <Col>
    <List className={classes.root}>
    {listItem}
    </List>
    </Col>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);