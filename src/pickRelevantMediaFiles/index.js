/**
 * External dependencies
 *
 * @ignore
 */
import { get, pick } from 'lodash';

/**
 * Creates an object composed of the (nested) picked object properties.
 *
 * @function
 * @since      1.4.0
 * @name       pickRelevantMediaFiles
 * @param      {Object}    image	   Media object.
 * @param      {string}    sizeSlug    The currently-selected image size slug (thumbnail, large, etc).
 * @return     {Object} 			   Relevant properties extracted from the original given media object.
 * @example
 *
 * pickRelevantMediaFiles( imageObject );
 *
 * // => Object { alt: '', caption: '', id: "21", url: 'http://dev.local/wp-content/uploads/2022/09/image.jpg' }
 */
export default ( image, sizeSlug = 'large' ) => {
	const imageProps = pick( image, [ 'alt', 'id', 'link', 'caption' ] );
	imageProps.url = get( image, [ 'sizes', sizeSlug, 'url' ] ) || get( image, [ 'media_details', 'sizes', sizeSlug, 'source_url' ] ) || image.url;

	const fullUrl = get( image, [ 'sizes', 'full', 'url' ] ) || get( image, [ 'media_details', 'sizes', 'full', 'source_url' ] );
	if ( fullUrl ) {
		imageProps.fullUrl = fullUrl;
	}

	return imageProps;
};
