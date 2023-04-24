'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs, Link } from '@mui/material';

export default function BreadcrumbsC({ style }) {
  const [breads, setBreads] = useState([]);
  const pathname = usePathname();
  const setData = (splitP) => {
    setBreads(splitP);
  }
  useEffect(() => {
    const splitP = pathname.split('/');
    setData(splitP);
  }, [pathname]);

  return (
    <Breadcrumbs color="text.primary primary">
        { breads.map((bread, index) => (
            bread != ''
            ? <Link className={ style.textNavPost } sx={{ fontSize: '0.875rem' }} underline="hover" href="/" key={index} >
            { bread.toUpperCase() }
            </Link>
            :
            <Link className={ style.textNavPost } sx={{ fontSize: '0.875rem' }} underline="hover" href="/" key={index} >
            INICIO
            </Link>
        ))}
    </Breadcrumbs>
  )
}
