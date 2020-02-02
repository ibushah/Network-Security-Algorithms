import React, { Component, createRef } from 'react';
import { Input, Card, Button, Row, Col, Alert } from 'antd';
import { Typography } from 'antd';


const { Text } = Typography;

export default class Cipher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cipher: {
                A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9,
                K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17,
                S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25
            },
            decrypted: ""
        }

        this.inputBox = createRef();
    }


    encrypt = () => {
        let { value } = this.inputBox.current.state;
        value = (value) ? value.toUpperCase().replace(/ /g, '') : ""

        let { cipher } = this.state;
        let decrypted = "";
        for (var i = 0; i < value.length; i++) {
            decrypted += this.formulate(cipher[value[i]]);
        }
        this.setState({
            decrypted
        })

    }

    formulate = s => this.getKeyByValue(this.state.cipher, (s + 3) % 26);

    getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);


    decryptorJSX = () => {
        return (
            <Card title={<span style={{color:'#FF7875'}}>SHIFT CIPHER DECRYPTION</span>} style={{ marginBottom: "20px", borderRadius: '20px', height: '250px', backgroundColor: '#F9F9F9', marginTop: '10px', width: '80%', marginLeft: '10%' }}>
                <Input size="large" ref={this.inputBox} style={{ textAlign: 'center', marginBottom: '10px' }} placeholder="Plain Text" />

                {this.state.decrypted && <Text style={{ display: 'block', textAlign: 'center', fontSize: '14px', fontStyle: 'italic', color: 'red' }} >{this.state.decrypted}</Text>}
                <Button type="danger" onClick={this.encrypt.bind(this)} style={{ marginTop: '10px', width: '60%', marginLeft: '20%',  color: 'white' }}  >
                    Decrypt
         </Button>
            </Card>
        )
    }
    encryptorJSX = () => {
        return (
            <Card title={<span style={{color:'rgb(41, 91, 231)'}}>SHIFT CIPHER ENCRYPTION</span>}   style={{ marginBottom: "20px", borderRadius: '20px', height: '250px', backgroundColor: '#F9F9F9', marginTop: '10px', width: '80%', marginLeft: '10%' }}>
                <Input size="large" ref={this.inputBox} style={{ textAlign: 'center', marginBottom: '10px' }} placeholder="Plain Text" />

                {this.state.decrypted && <Text style={{ display: 'block', textAlign: 'center', fontSize: '14px', fontStyle: 'italic', color: '#1890FF' }} >{this.state.decrypted}</Text>}
                <Button  onClick={this.encrypt.bind(this)} style={{ marginTop: '10px', width: '60%', marginLeft: '20%', color: 'white' }} type="primary" >
                    Encrypt
         </Button>
            </Card>
        )
    }
    render() {

        return (
            <React.Fragment  >

                <Row style={{ marginTop: '20px' }}>
                    <Col lg={12} xl={12} md={24} sm={24}>
                        {this.encryptorJSX()}
                    </Col>
                    <Col lg={12} xl={12} md={24} sm={24}>

                        {this.decryptorJSX()}
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}