<?php


// Add scripts and stylesheets

wp_enqueue_style( 'style', get_stylesheet_uri() );

add_theme_support('post-thumbnails');

function load_stylesheets() 
    {
        wp_register_style('bootstrap', get_template_directory_uri() . '/assets/bootstrap/css/bootstrap.min.css',
                           array(), false, 'all');
        wp_enqueue_style('bootstrap');

        wp_register_style('style', get_template_directory_uri() . '/style.css',
                           array(), false, 'all');
        wp_enqueue_style('style');

    }
    add_action('wp_enqueue_scripts', 'load_stylesheets');

    function include_jquery()
    {
        wp_deregister_script('jquery');

        wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/js/jquery.min.js', '', 1, true);
        add_action('wp_enqueue_scripts', 'jquery');
    }
    add_action('wp_enqueue_scripts', 'include_jquery');


    function load_scripts() 
    {
        wp_register_script('scripts', get_template_directory_uri() . '/assets/js/scripts.js',
                            array(), 1, true);
        wp_enqueue_script('scripts');

        wp_register_script('bootstrap', get_template_directory_uri() . '/assets/bootstrap/js/bootstrap.min.js',
                array(), 1, true);
        wp_enqueue_script('bootstrap');
    }
    add_theme_support('menus');
    register_nav_menus(
        array(
            'nav' => __('nav', 'theme'),
            'menu' => __('Menu', 'theme'),
        )
    );

    add_action('wp_enqueue_scripts', 'load_scripts');
// ..............................
function add_class_to_paragraphs($content) {
    // Check if we are in a single post
    if (is_single()) {
        // Add the desired class to all <p> tags in the post content
        $content = str_replace('<p>', '<p class="your-class">', $content);
    }
    return $content;
}
add_filter('the_content', 'add_class_to_paragraphs');


