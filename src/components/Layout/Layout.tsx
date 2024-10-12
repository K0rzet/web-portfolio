import React, { PropsWithChildren } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.scss'

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.circle} />
        <div className={styles.content}>
            {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
