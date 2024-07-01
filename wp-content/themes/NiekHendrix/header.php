<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head() ?>
    </head>

    <body <?php body_class() ?>>
        <header class="">
            <?php wp_nav_menu( array( 'theme_location' => 'header-menu', 'menu_class' => 'navbar container' ) ); ?>
        </header>
