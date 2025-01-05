#version 330 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D texture1;
uniform vec2 position;

void main()
{
    FragColor = texture(texture1, vec2(TexCoords.x + position.x/50, TexCoords.y + position.y/50));
}