import React, { Component } from 'react';
import {
  Form,
  Col,
  Container,
  Button,
  Row,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  filedLeaving,
  fieldUpdate,
  submitForm
} from '../../redux/actions/createResturantActions';
import styled from 'styled-components';
const Styles = styled.div`
  .form {
    background-color: #fcfcfc;
    width: 80vw;

    margin: 0 auto 0 auto;
    padding: 5rem 0;
  }
  #upload_button {
    display: block;
  }
  #upload_button input[type='file'] {
    display: none;
  }
`;

interface Props {
  className: string;
  testDispatch: () => void;
  form: { [key: string]: any };
  onLeavingField: (filedName: string) => void;
  onFiledUpdate: (filedName: string, value: string) => void;
  onSubmit: () => Promise<boolean>;
}

class NewRestaurant extends Component<Props, {}> {
  public shouldComponentUpdate(nextProps: Props, nextState: any) {
    console.log(nextProps, nextState);
    console.log('shouldComponentUpdate');

    return true;
  }
  public componentWillReceiveProps(nextProps: Props) {
    console.log(nextProps);
    console.log('componentWillReceiveProps');
  }

  handleChange = (event: any) => {
    const { onFiledUpdate } = this.props;
    onFiledUpdate(event.target.name, event.target.value);
  };

  handleLeavingField = (fieldName: string) => {
    const { onLeavingField } = this.props;
    onLeavingField(fieldName);
  };
  handleFormSubmit = async () => {
    const { onSubmit } = this.props;
    await onSubmit();
  };

  render() {
    const { form } = this.props;
    console.log('name', form['name']);

    return (
      <Styles>
        <Form className='form'>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Restaurant name</Form.Label>
              <Form.Control
                size='lg'
                type='text'
                placeholder='Enter name'
                name='name'
                isInvalid={form['name'].touched && !form['name'].valid}
                onBlur={() => this.handleLeavingField('name')}
                onChange={this.handleChange}
              />
              <Form.Control.Feedback type='invalid'>
                {form['name'].error}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Owner name</Form.Label>
              <Form.Control
                size='lg'
                type='text'
                placeholder='Enter name'
                name='owner'
                isInvalid={form['owner'].touched && !form['owner'].valid}
                onChange={this.handleChange}
                onBlur={() => this.handleLeavingField('owner')}
              />
              <Form.Control.Feedback type='invalid'>
                {form['owner'].error}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridState'>
            <Form.Label>Type</Form.Label>
            <Form.Control
              size='lg'
              as='select'
              name='type'
              isInvalid={form['type'].touched && !form['type'].valid}
              onChange={this.handleChange}
              onBlur={() => this.handleLeavingField('type')}
            >
              <option>Choose...</option>
              <option>Piza</option>
              <option>Burger</option>
              <option>Peastery</option>
              <option>Indian</option>
              <option>Cultural</option>
            </Form.Control>
            <Form.Control.Feedback type='invalid'>
              {form['type'].error}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formGridAddress2'>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Enter phone number'
              name='phoneNumber'
              isInvalid={
                form['phoneNumber'].touched && !form['phoneNumber'].valid
              }
              onChange={this.handleChange}
              onBlur={() => this.handleLeavingField('phoneNumber')}
            />
            <Form.Control.Feedback type='invalid'>
              {form['phoneNumber'].error}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              size='lg'
              placeholder='1234 Main St'
              name='address'
              isInvalid={form['address'].touched && !form['address'].valid}
              onChange={this.handleChange}
              onBlur={() => this.handleLeavingField('address')}
            />
            <Form.Control.Feedback type='invalid'>
              {form['address'].error}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control
                size='lg'
                name='city'
                isInvalid={form['city'].touched && !form['city'].valid}
                onChange={this.handleChange}
                onBlur={() => this.handleLeavingField('city')}
              />
              <Form.Control.Feedback type='invalid'>
                {form['city'].error}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Sub-city</Form.Label>
              <Form.Control
                size='lg'
                as='select'
                name='subCity'
                isInvalid={form['subCity'].touched && !form['subCity'].valid}
                onChange={this.handleChange}
                onBlur={() => this.handleLeavingField('subCity')}
              >
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                {form['subCity'].error}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Kebele</Form.Label>
              <Form.Control
                size='lg'
                name='kebele'
                isInvalid={form['kebele'].touched && !form['kebele'].valid}
                onChange={this.handleChange}
                onBlur={() => this.handleLeavingField('kebele')}
              />
              <Form.Control.Feedback type='invalid'>
                {form['kebele'].error}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                placeholder='lat'
                type='number'
                size='lg'
                name='lat'
                isInvalid={form['lat'].touched && !form['lat'].valid}
                onChange={this.handleChange}
                onBlur={() => this.handleLeavingField('lat')}
              />
              <Form.Control.Feedback type='invalid'>
                {form['lat'].error}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                placeholder='lng'
                type='number'
                size='lg'
                name='lng'
                isInvalid={form['lng'].touched && !form['lng'].valid}
                onChange={this.handleChange}
                onBlur={() => this.handleLeavingField('lng')}
              />
              <Form.Control.Feedback type='invalid'>
                {form['lng'].error}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group id='formGridCheckbox'>
            <Form.Check
              type='checkbox'
              label='Activate'
              name='status'
              onChange={this.handleChange}
              isInvalid={form['status'].touched && !form['status'].valid}
              onBlur={() => this.handleLeavingField('status')}
            />
            <Form.Control.Feedback type='invalid'>
              {form['status'].error}
            </Form.Control.Feedback>
          </Form.Group>

          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='inputGroupFileAddon01'>
                Upload
              </span>
            </div>
            <div className='custom-file'>
              <input
                type='file'
                className='custom-file-input'
                id='inputGroupFile01'
                aria-describedby='inputGroupFileAddon01'
              />
              <label className='custom-file-label' htmlFor='inputGroupFile01'>
                Choose file
              </label>
            </div>
          </div>
          <br></br>

          <div className='input-group mt-12'>
            <div className='custom-file'>
              <input
                id='inputGroupFile01'
                type='file'
                className='custom-file-input'
              />

              <label className='custom-file-label' htmlFor='inputGroupFile01'>
                Choose file
              </label>
            </div>
          </div>

          <Row>
            <Col xs lg='12'>
              <Button
                onClick={this.handleFormSubmit}
                className=' float-right'
                variant='primary'
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Styles>
    );
  }
}

const mapStateToProps = (state: any) => ({
  form: Object.assign({}, state.form.createRestaurant)
});

const mapDispatchToProps = (dispatch: any) => ({
  testDispatch: () => dispatch({ type: 'test', payload: 'payload test' }),
  onLeavingField: (filedName: string) => dispatch(filedLeaving(filedName)),
  onFiledUpdate: (filedName: string, value: string) =>
    dispatch(fieldUpdate(filedName, value)),
  onSubmit: (): Promise<boolean> => dispatch(submitForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurant);
