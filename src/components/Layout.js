import React from 'react';

function Layout({ name, className, children }){
    return (
        <main id="wrap">
            <section id={ name } className={ className }>{ children }</section>
        </main>
    )
}

export default Layout;