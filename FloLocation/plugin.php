<?

/* 
* Plugin Name: Block Plugin
* Description: Test plugin for wizarts
* Version: 0.6.9
*/

function loadMyBlockFiles() {
    wp_enqueue_script(
        'my-super-unique-handle', 
        plugin_dir_url(__FILE__) . 'my-block.js',
        array('wp-blocks', 'wp-i18n', 'wp-editor'),
        true
    );
}

add_action('enqueue_block_editor_assets', 'LoadMyBlockFiles');

function location_frontend_scripts() {
	if ( has_block( 'flof/flolocation' ) ) {
		wp_enqueue_script(
			'GeoLocationScript', get_template_directory_uri() . '/js/GeoLocationScript.js', array(), '1.0.0' , true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'location_frontend_scripts' );	