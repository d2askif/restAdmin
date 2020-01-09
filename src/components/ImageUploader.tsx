import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classes from '*.module.css';
import { IconButton, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles(theme => ({
  imgContainer: {
    height: '100px',
    width: '100px',
    '&:hover $imgActions': {
      display: 'block'
    }
  },

  imgActions: {
    display: 'none',
    background: 'rgba(0, 0, 0, 0.5)',
    width: 100,
    position: 'relative',
    bottom: '44px'
  },
  img: {
    height: '100px',
    width: '100px'
  }
}));

interface Props {}
function ImageUploaded(props: Props) {
  const [imgUrl, setImgUrl] = useState('');
  const classes = useStyles();
  return (
    <div>
      <Button
        style={{ marginTop: 8, marginLeft: 0 }}
        variant='contained'
        component='label'
      >
        Upload File2
        <input
          type='file'
          style={{ display: 'none' }}
          onChange={e => {
            if (e.target.files)
              setImgUrl(
                'https://danielshenkutie.s3.eu-north-1.amazonaws.com/0+(1).jpeg'
              );
          }}
        />
      </Button>
      <div className={classes.imgContainer}>
        <img src={imgUrl} alt='' className={classes.img} />
        <div className={classes.imgActions}>
          <IconButton>
            <AddIcon fontSize='small' style={{ color: '#fff' }} />
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize='small' style={{ color: '#fff' }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ImageUploaded;
