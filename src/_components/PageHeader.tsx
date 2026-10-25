import React from 'react'

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted mt-2">{description}</p>
    </div>
  )
}

export default PageHeader
