/**
 * @file FIXME Utility function to convert a title to a slug.
 * The title belongs to an item. The slug is what we add to the url of the item to
 * help search engines to index the item's page.
 */

/**
 * FIXME This function produces a slug from the title of an article.
 *
 * Converts this:
 * How do I protect my investment in bespoke software?
 * into this:
 * how-do-i-protect-my-investment-in-bespoke-software
 *
 * A slug is better suited to be part of a URL than the original title.
 * It has no whitespaces, all chars are lowercase and everything that is not
 * alphanumeric is stripped away.
 *
 * @param {string} title The title we have to convert into a slug
 * @returns {string} The slug
 */
export function backgroundColor(screenWidth, configuration, itIsLeftColumn, row) {

    let useLighterColor = true;

    if (itIsLeftColumn)
        useLighterColor = !useLighterColor;

    if (row % 2 === 0 && (screenWidth >= configuration.responsiveBreakpoints.large))
        useLighterColor = !useLighterColor;

    if (useLighterColor)
        return configuration.defaultColorsTable["DARKGREY"];
    else
        return configuration.defaultColorsTable["VERYDARKGREY"];

}