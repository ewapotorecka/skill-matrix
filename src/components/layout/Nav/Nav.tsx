import React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export const Nav: React.FC = () => {
  return (
    <AppBar position="static" className="flex items-end">
      <Toolbar>
        <Button component={Link} href="/admin/dashboard" color="inherit">
          Home
        </Button>
        <Button
          component={Link}
          href="/admin/dashboard/employees"
          color="inherit"
        >
          Employees
        </Button>
        <Button
          component={Link}
          href="/admin/dashboard/active-reviews"
          color="inherit"
        >
          Active Reviews
        </Button>
        <Button
          component={Link}
          href="/admin/dashboard/skills-matrix"
          color="inherit"
        >
          Skills Matrix
        </Button>
        <Button
          component={Link}
          href="/admin/dashboard/calendar"
          color="inherit"
        >
          Calendar
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
