import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { InputField } from '../../Type/form';
import {
  withStyles,
  WithStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Service from '../../services/resturant/ReturantService';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const uploadFileMutation = gql`
  mutation($someFile: Upload!) {
    singleUpload(file: $someFile)
  }
`;

const EditRestaurant = () => {
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    return;
  };
  return (
    <Container component='main' maxWidth='lg'>
      <div>
        <form style={{ backgroundColor: '#fcfcfc', padding: 32 }}>
          <TextField
            variant='outlined'
            margin='dense'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='dense'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='dense'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='dense'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='dense'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoFocus
          />
          <Button variant='contained' component='label'>
            Upload File
            <Mutation mutation={uploadFileMutation}>
              {(mutate: any) => (
                <input
                  type='file'
                  onChange={(e: any) =>
                    mutate({ variables: { file: e.target.files[0] } })
                  }
                  style={{ display: 'none' }}
                />
              )}
            </Mutation>
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default EditRestaurant;
