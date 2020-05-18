set -e

print_usage_and_exit () {
    echo 'Usage: ./clear-version.sh'
    echo "This utility script CLEARS ALL VERSIONS"
    echo "This utility script was only used during the initial setup phase and should be deleted after 2nd June 2020."
    exit 1
}

# Retrieve 2-step verification to continue
#-----------------------------------------
function ask_yes_or_no() {
    read -p "$1 ([y]es or [N]o): "
    case $(echo $REPLY | tr '[A-Z]' '[a-z]') in
        y|yes) echo "yes" ;;
        *)     echo "no" ;;
    esac
}
if [[ "no" == $(ask_yes_or_no "This script will clear all previous versions.  It was a utility used during development to make it easy to set up the initial documentation.  Do you want to proceed?") || \
      "no" == $(ask_yes_or_no "If this file still exists after 2nd June 2020, it should have been deleted.  Is it before 2nd June 2020?  If not, DO NOT USE THIS!  Are you sure you want to continue?") ]]
then
    echo "Skipped."
    exit 0
fi

sudo rm -r versioned_docs
sudo rm -r versioned_sidebars
sudo rm versions.json
sudo rm pages/en/versions.js