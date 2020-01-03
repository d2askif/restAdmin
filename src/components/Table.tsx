import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
type T = { [key: string]: any };
interface Props {
  header: T;
  data: T[];
  onDelete: (id: string) => void;
  onEdit: () => void;
}
interface State {
  checked: boolean;
  selected: number[];
}
class TableComponent extends Component<Props, State> {
  state: State = {
    checked: false,
    selected: []
  };

  handleChecked = (name: string) => (event: any) => {
    this.setState({ checked: event.target.checked });
  };
  handleClick = (event: any, rowNumber: number) => {
    const selectedRows = [...this.state.selected];
    const index = selectedRows.findIndex(val => val === rowNumber);
    index !== -1 ? selectedRows.splice(index, 1) : selectedRows.push(rowNumber);
    this.setState({ ...this.state, selected: selectedRows });
  };
  isSelected = (index: number): boolean => {
    return this.state.selected.findIndex(val => val === index) !== -1;
  };

  handleOnDelete = (index: number) => {
    const { data, onDelete } = this.props;
    const id = data[index].id;

    onDelete(id);
  };
  render() {
    const { header, data } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                  checked={this.state.checked}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                  onChange={this.handleChecked('select all desserts')}
                />
              </TableCell>

              {Object.keys(header).map((item, index) => (
                <TableCell key={`tbh-${index}`}>
                  {header[item].toUpperCase()}
                </TableCell>
              ))}
              <TableCell align='right'>{''}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((rows, index) => {
              const isItemSelected = this.isSelected(index);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={`row-key-${index}`}
                  selected={isItemSelected}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={isItemSelected}
                      onChange={event => this.handleClick(event, index)}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  {Object.keys(rows).map((key, i) => {
                    return <TableCell key={`tbrc-${i}`}>{rows[key]}</TableCell>;
                  })}
                  <TableCell align='right'>
                    <IconButton>
                      <VisibilityIcon color='primary' />
                    </IconButton>
                    <IconButton>
                      <EditIcon color='primary' onClick={this.props.onEdit} />
                    </IconButton>
                    <IconButton
                      color='primary'
                      onClick={() => this.handleOnDelete(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TableComponent;
