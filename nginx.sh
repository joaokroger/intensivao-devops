### NGINX SETUP ###

echo -e "\n==============================================================="
echo -e "Installing NGINX"
echo -e "===============================================================\n"

sudo apt update
sudo apt install nginx

echo -e "\n==============================================================="
echo -e "Configuring Server"
echo -e "===============================================================\n"

sudo chmod a+w /etc/nginx/sites-available
sudo cp -f nginx_config /etc/nginx/sites-available/sum-numbers
sudo ln -s /etc/nginx/sites-available/sum-numbers /etc/nginx/sites-enabled/

echo -e "\n==============================================================="
echo -e "Starting nginx"
echo -e "===============================================================\n"

sudo nginx -t

if [ $? -eq 0 ]; then
    sudo systemctl reload nginx

    if [ $? -eq 0 ]; then
        sudo systemctl start nginx
    fi
    
    echo "Server is on."
else
    echo "An error occurred while turning the server on."
    exit 1
fi