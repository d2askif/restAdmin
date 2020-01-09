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
import CircularProgress from '@material-ui/core/CircularProgress';
import Styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

const Styles = Styled.div`
   display: flex;
   flex: 1;
   padding:16px;
   width: 80Vw;
   justify-content: center;

`;

type T = { [key: string]: any };
interface Props {
  header: T;
  data: T[];
  isLoading: boolean;
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  onChecked: (indexes: number[]) => void;
  onDetailView: (indexes: number) => void;
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
    this.handleSelectAll(event);
    this.setState({ checked: event.target.checked });
  };
  handleClick = (event: any, rowNumber: number) => {
    const selectedRows = [...this.state.selected];
    const index = selectedRows.findIndex(val => val === rowNumber);
    index !== -1 ? selectedRows.splice(index, 1) : selectedRows.push(rowNumber);

    if (!event.target.checked) {
      this.setState({ checked: event.target.checked });
    }

    this.setState(
      prevState => ({ ...prevState, selected: selectedRows }),
      () => {
        this.props.onChecked(this.state.selected);
      }
    );
  };
  isSelected = (index: number): boolean => {
    return this.state.selected.findIndex(val => val === index) !== -1;
  };

  handleOnDelete = (index: number) => {
    const { data, onDelete } = this.props;

    onDelete(index);
  };

  handleOnEdit = (index: number) => {
    const { data, onEdit } = this.props;

    onEdit(index);
  };

  handleSelectAll = (event: any) => {
    console.log(event);

    const { data } = this.props;
    let newSelected: number[] = [];
    if (event.target.checked) {
      newSelected = data.map((_, index) => index);
    }
    this.setState(
      prevState => ({ ...prevState, selected: newSelected }),
      () => {
        this.props.onChecked(this.state.selected);
      }
    );
  };

  renderProgress = () => {
    return (
      <Styles>
        <CircularProgress />
      </Styles>
    );
  };

  renderTableBody = () => {
    const { data } = this.props;

    return (
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
                if (key === 'url') {
                  console.log({ key });

                  return (
                    <TableCell>
                      <Avatar src={rows[key]} variant='square' />
                    </TableCell>
                  );
                }
                return <TableCell key={`tbrc-${i}`}>{rows[key]}</TableCell>;
              })}
              <TableCell align='right'>
                <IconButton>
                  <VisibilityIcon
                    color='primary'
                    onClick={() => this.props.onDetailView(index)}
                  />
                </IconButton>
                <IconButton>
                  <EditIcon
                    color='primary'
                    onClick={() => this.handleOnEdit(index)}
                  />
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
    );
  };
  render() {
    const { header, isLoading } = this.props;
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
          {isLoading ? this.renderProgress() : this.renderTableBody()}
        </Table>
      </TableContainer>
    );
  }
}

export default TableComponent;
