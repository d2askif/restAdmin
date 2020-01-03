import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: colors.blueGrey[800],
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const CustomRouterLink = forwardRef((props: any, ref: any) => {
  console.log({ props });

  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <NavLink to={props.to} {...props} />
    </div>
  );
});

type Page = { title: string; href: string; icon: any };
interface Props {
  className: string;
  pages: Page[];
  rest?: { [key: string]: any };
}
function SidebarNav(props: Props) {
  const { className, pages, ...res } = props;
  const classes = useStyles();

  return (
    <List className={className} {...res}>
      {pages.map(page => (
        <ListItem key={page.title}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarNav;
