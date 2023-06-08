import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Breadcrumbs, BreadcrumbItem } from '../Breadcrumbs';
import '@testing-library/jest-dom/extend-expect';

describe('Breadcrumbs', () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { href: '/users', title: 'Users' },
    { href: '/albums', title: 'Albums' },
    { href: '/photos', title: 'Photos' },
  ];

//   it('renders the correct number of breadcrumbs', () => {
//     const { getAllByRole } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);
//     const breadcrumbItems = getAllByRole('a');
//     expect(breadcrumbItems).toHaveLength(breadcrumbs.length);
//   });

  it('displays the correct breadcrumb titles', () => {
    const { getByText } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);
    
    breadcrumbs.forEach((breadcrumb) => {
      const breadcrumbElement = getByText(breadcrumb.title);
      expect(breadcrumbElement).toBeInTheDocument();
    });
  });

  it('triggers onClick event when a breadcrumb is clicked', () => {
    const handleClick = jest.fn();
    const onClickBreadcrumb = { title: 'Click Me', onClick: handleClick };
    const breadcrumbsWithClick: BreadcrumbItem[] = [...breadcrumbs, onClickBreadcrumb];

    const { getByText } = render(<Breadcrumbs breadcrumbs={breadcrumbsWithClick} />);
    const clickBreadcrumb = getByText(onClickBreadcrumb.title);
    
    fireEvent.click(clickBreadcrumb);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
