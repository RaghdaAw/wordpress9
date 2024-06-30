<?php get_header(); ?>
<?php 
if ( is_page('Paintings') ) : ?>
    <div class="container pt-5 pb-5">
    <?php wp_nav_menu( array( 'theme_location' => 'menu', 'menu_class' => 'categories-filter' ) ); ?>
        <h1><?php the_title(); ?></h1>
        <div>
            <?php the_content(); ?>
        </div>
    </div>
    <?php get_footer(); ?> 
<?php else : ?>
    <div class="container pt-5 pb-5">
        <h1><?php the_title(); ?></h1>
        <div>
            <?php the_content(); ?>
        </div>
    </div>
    <?php get_footer(); ?> 
<?php endif; ?>
