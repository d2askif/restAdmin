import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  popupIndicatorOpen: {
    color: 'rgba(0, 33, 0, 0.54)',
    padding: '2px',
    marginRight: '-2px',
    border: 0,
    borderRadius: 0,
    transform: 'none'
  },
  popupIndicator: {
    color: 'rgba(0, 33, 0, 0.54)',
    padding: '2px',
    marginRight: '-2px',
    borderLeft: 'solid 1px #aaa',
    transform: 'none',
    borderRadius: 0
  }
}));
type Option = { label: string; value: string };
interface Props {
  options: Option[];
  placeholder: string;
  noOptionText?: string;
  onChange: (selected: Option | null) => void;
}

function Selector(props: Props) {
  const { options, noOptionText, placeholder, onChange } = props;
  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<{}>,
    selected: Option | null
  ) => {
    onChange(selected);
  };
  return (
    <Autocomplete
      id='combo-box-demo'
      noOptionsText={noOptionText || 'No option found'}
      options={options}
      classes={{
        popupIndicatorOpen: classes.popupIndicatorOpen,
        popupIndicator: classes.popupIndicator
      }}
      onChange={handleChange}
      getOptionLabel={(option: Option) => option.label}
      renderInput={params => (
        <TextField
          {...params}
          label={placeholder}
          variant='outlined'
          fullWidth
        />
      )}
    />
  );
}

export default Selector;
