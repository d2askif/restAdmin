import React from 'react';
import './ListItemStyle.css';
interface Props {
  id: string;
  name: string;
  phone: string;
  location: string;
  email: string;
  status: boolean | string;
  onEdit: () => void;
  onDelete: () => void;
}

const ListItem = ({
  id,
  name,
  phone,
  location,
  email,
  status,
  onEdit,
  onDelete
}: Props) => {
  return (
    <div className='container '>
      <div className='id item'>{id}</div>
      <div className='name item'>{name}</div>
      <div className='phone item'>{phone}</div>
      <div className='location item'>{location}</div>
      <div className='action item'>
        <button className='edit-button button' onClick={onEdit}>
          Edit
        </button>
        <button className='delete-button button' onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
