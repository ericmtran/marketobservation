import React, {Component} from 'react';
import Navibar from './Nav';
import Footer from './Footer';
import Carousel from './Carousel';
import ListContent from './ListContent';
import {Col,Row,Container} from 'reactstrap';
import { Grid } from '@material-ui/core';
export default class Home extends Component{
    render(){
        return (
            <div>
            <Grid>
                <Row>
                    <Col><Navibar/></Col>
                </Row>
                <Row>
                    <Col><Carousel/></Col> 
                </Row>

                <Row>
                    <Col><ListContent></ListContent></Col>
                    <Col xs="2">.col-sm-auto .offset-sm-1</Col>
                </Row>
                <Row>
                    <Col><Footer/></Col>
                </Row>
            </Grid>
            </div>
        )
    }
}