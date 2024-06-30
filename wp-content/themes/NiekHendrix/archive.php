<?php get_header(); ?>

<div class="container pt-5 pb-5">
    <?php wp_nav_menu(array('theme_location' => 'menu', 'menu_class' => 'categories-filter')); ?>
    <h1><?php single_cat_title(); ?></h1>

    <div class="row">
        <?php if (have_posts()):
            while (have_posts()):
                the_post(); ?>

                <div class="figure test">
                    <h3><?php the_title() ?></h3>
                    <?php if (the_content()): ?>
                        <img src="<?php the_content(); ?>" class="figure-img img-fluid rounded">
                    <?php endif; ?>
                    <!-- <figcaption class="figure-caption">A caption for the above image.</figcaption> -->

                </div>
            <?php endwhile; endif; ?>
    </div>
</div>

<?php get_footer(); ?>