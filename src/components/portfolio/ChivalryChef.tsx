'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { CodeXml, Braces, Grid2X2 } from 'lucide-react';
import { ProjectStyling } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExpandableSection } from '@/components/ExpandableSection';
import { cn } from '@/lib/utils';
import CodeSnippetViewer from '@/components/CodeSnippetViewer';

export default function ChivalryChef(styling: ProjectStyling) {
  return (<>
    <Card style={{
        backgroundColor: styling.backgroundColor,
        color: styling.textColor,
        borderColor: styling.borderColor,
        fontFamily: styling.fontFamily,
    }} className="border-2 my-6">
        <CardHeader className='flex justify-between items-center'>
            <span className={cn('text-2xl font-bold mb-4 text-right', styling.textColor)}>𒀊</span>
        </CardHeader>
        <CardContent className='w-[90%] mx-auto'>
            <CardDescription style={{
                color: styling.textColor, opacity: 0.9 }
                }>
                <div className="relative border border-8 mb-10"
        style={{
            borderColor: '#222222',
            boxShadow: `5px 5px 15px #222222`
        }}>
        <div className="relative z-20"
            style={{
                boxShadow: `0 0 6px 6px #222222`
            }}>
            <video
                muted autoPlay loop width="100%" height="100%"
                className="w-full h-full z-10">
                <source src='/videos/ChivChefGameplay.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-9 bg-[#555555] text-center text-white px-3 py-2 z-10" 
            style={{ 
                fontFamily: styling.fontFamily, 
                boxShadow: `5px 5px 15px #222222`,
                textShadow: `5px 5px 15px #000000`,
            }}>
                Debugging AI
            </div>
        </div>
            </CardDescription> 
        </CardContent>
    </Card>

    <ExpandableSection 
        title="Development & Mechanics" 
        icon={CodeXml} 
        iconColor="text-[#8B4513]"
        className="border-2 w-[97%] mx-auto"
        styling={styling}>
        <CardContent>
            <CardDescription style={{
                color: styling.textColor, opacity: 0.9 }
                }>
<code className="text-md text-black mt-6 max-w-3xl mb-2">
<div className="w-[80%] mx-auto">
- For in-game cooking, the game uses an external database API for verified cooking recipes.<br></br>
<div className='mt-2 w-full flex justify-center mx-auto'>
    <Button asChild
        className="bg-black hover:bg-[#8B4513] text-white border hover:border-2"
        style={{
        borderColor: styling.borderColor,
        fontFamily: styling.fontFamily,
        }}>
        <Link href="https://www.themealdb.com/api.php" target="_blank" rel="noopener noreferrer">
        TheMealDB DATABASE
        <Braces 
        style={{ width: '1.2rem', height: '1.2rem' }}
        className="text-white flex-shrink-0 float-right ml-2" />
        </Link>
    </Button>
</div>
<br></br><br></br>
Through JSON, the data is effectively translated from the raw database to in-game logic.
<br></br><br></br>
- The in-game ambient noises produced by the boiling ocean, and the breeze of the wind, are procedurally generated in real-time by modulating types of noise, and using Low Pass Filters! What makes this even more fun is that the Grass Shader, Tree Swaying Shader and the "Sweep-speed" of the audible wind noise, are synchronized. This makes them all sway on the audio!
<br></br><br></br>
- The game island is also generated procedurally by using a  

<Button asChild
    className="ml-2 bg-black hover:bg-[#8B4513] text-white border hover:border-2"
    style={{
    borderColor: styling.borderColor,
    fontFamily: styling.fontFamily,
    }}>
    <Link href="https://en.wikipedia.org/wiki/Voronoi_diagram" target="_blank" rel="noopener noreferrer">
     Voronoi Distribution
     <Grid2X2 
        style={{ width: '1.2rem', height: '1.2rem' }}
        className="text-white flex-shrink-0 float-right ml-2" />
    </Link>
</Button>
<br></br>
<br></br>After this is generated in real-time -either based on seeds or randomness- trees and big rocks aswell as smaller stones are scattered randomly throughout the map. All of this advocates a new fresh world on load everytime, and allows for easy future additions to the terrain.
<br></br><br></br>
- The Mesh Cutting algorithm isn't only used for slicing ingredients, as it is also secretly used to splice the world during generation! This resulting spliced mesh is the mesh grass is rendered upon.
</div>
<br></br>
<br></br>
<hr></hr>

<CardHeader className='flex justify-between items-center'
style={{
    color: styling.textColor,
    borderColor: styling.borderColor,
    fontFamily: styling.fontFamily,
}}>
    <CardTitle>Design</CardTitle>
</CardHeader>
<br></br>
<p className="w-[80%] mx-auto mb-8">
    Chivalry Chef seeks to combine Cooking Game Mechanics with a Medieval Theme,<br></br>
    all encased within a "Jolly" / Cartoony look and feel reminiscent of modern low-poly indie games, but also invoking a feeling of nostalgia for 90s 3D platformers.
    The goal is to seamlessly blend these styles into one unique, wacky, chaotically fun experience: <b>Chivalry Chef!</b>
<br></br><br></br>
    So in short, Medieval Cooking Battle Royale, topped with a pinch of humor.<br></br>
</p>

<div className="w-full md:w-[70%] mx-auto relative overflow-hidden mt-4 mb-8 border border-2 shadow-lg transition-all duration-300 hover:shadow-2xl" 
style={{borderColor: styling.borderColor, boxShadow: `0 10px 25px -5px ${styling.borderColor}30, 0 8px 10px -6px ${styling.borderColor}20`}}>
    <Image src='/images/ChevalierChef.jpg' alt="Chivalry Chef map design image" 
    loading='lazy'
    className='grayscale-50 hover:grayscale-0 hover:border-8 border-4 transition-all'
    width={1920} height={1080} layout="responsive" objectFit="cover" />
</div>
<br></br>
<hr></hr>

<CardHeader className='mt-4 flex justify-between items-center'
style={{
    color: styling.textColor,
    borderColor: styling.borderColor,
    fontFamily: styling.fontFamily,
}}>
    <CardTitle>Development Process</CardTitle>
</CardHeader>

<div className='text-center'>
<p>
    I started working on an algorithm that procedurally generates an island, based on the 
<Link href="https://en.wikipedia.org/wiki/Voronoi_diagram" 
target="_blank" rel="noopener noreferrer"
className='hover:bg-[#8B4513] hover:text-white transition-all p-1'
style={{
    borderColor: styling.borderColor,
    fontFamily: styling.fontFamily,
}}>
    Voronoi Distribution.
</Link>
</p>

<div className="w-full md:w-[75%] mx-auto relative overflow-hidden mt-4 border border-2 shadow-lg transition-all duration-300 hover:shadow-2xl" 
style={{borderColor: styling.borderColor, boxShadow: `0 10px 25px -5px ${styling.borderColor}30, 0 8px 10px -6px ${styling.borderColor}20`}}>
    <Image src='/images/ChivChefVoronoi.jpg' alt="Chivalry Chef Voronoi Generation image" 
    loading='lazy'
    className='grayscale-50 hover:grayscale-0 hover:border-8 border-4 transition-all'
    width={1920} height={1080} layout="responsive" objectFit="cover" />
</div>
<p className='text-[12px] mt-2 mb-3 w-[75%] mx-auto mb-8'>
    Using variables such as Elevation, Size and other factors the voronoi points are stretched upwards/downwards, ultimately creating a terrain heightmap.
</p>
<div className="w-full md:w-[75%] mx-auto relative overflow-hidden mt-4 border border-2 shadow-lg transition-all duration-300 hover:shadow-2xl" 
style={{borderColor: styling.borderColor, boxShadow: `0 10px 25px -5px ${styling.borderColor}30, 0 8px 10px -6px ${styling.borderColor}20`}}>
    <Image src='/images/ChivChefVoronoi2.jpg' alt="Chivalry Chef Voronoi Generation image" 
    loading='lazy'
    className='grayscale-50 hover:grayscale-0 hover:border-8 border-4 transition-all'
    width={1920} height={1080} layout="responsive" objectFit="cover" />
</div>
<p className='text-[12px] mt-2 mb-3 w-[75%] mx-auto mb-8'>
By using a falloff map on the generated mesh, it lowers the edges of the heightmap, therefore always creating an 'island'-like shape.<br></br>
What is also interesting is that different algorithms for calculating distances between points, already create different results in the world mesh!<br></br>
<br></br>

<div className='mt-2 w-full flex justify-center mx-auto'>
<Button asChild
    className="mb-2 bg-black hover:bg-[#8B4513] text-white border hover:border-2"
    style={{
    borderColor: styling.borderColor,
    fontFamily: styling.fontFamily,
    }}>
    <Link href="https://www.alanzucconi.com/tag/minkowski/" 
    target="_blank" rel="noopener noreferrer"
    className="flex items-center justify-between">
    Minkowski Distance
    <CodeXml 
    style={{ width: '1.5rem', height: '1.5rem' }}
    className="text-white flex-shrink-0 float-right ml-2" />
    </Link>
</Button><br></br>
</div>
<div className='mt-2 w-full flex justify-center mx-auto'>
<Button asChild
    className="mb-2 bg-black hover:bg-[#8B4513] text-white border hover:border-2"
    style={{
    borderColor: styling.borderColor,
    fontFamily: styling.fontFamily,
    }}>
    <Link href="https://www.codingame.com/playgrounds/243/voronoi-diagrams/voronoi-diagrams-distance-functions" 
    target="_blank" rel="noopener noreferrer"
    className="flex items-center justify-between">
    Manhattan Distance
    <CodeXml 
    style={{ width: '1.5rem', height: '1.5rem' }}
    className="text-white flex-shrink-0 float-right ml-2" />
    </Link>
</Button>
</div>
</p>

<div className="w-full md:w-[75%] mx-auto relative overflow-hidden mt-4 border border-2 shadow-lg transition-all duration-300 hover:shadow-2xl" 
style={{borderColor: styling.borderColor, boxShadow: `0 10px 25px -5px ${styling.borderColor}30, 0 8px 10px -6px ${styling.borderColor}20`}}>
    <Image src='/images/ChivChefVoronoi3.jpg' alt="Chivalry Chef Voronoi Generation image" 
    loading='lazy'
    className='grayscale-50 border-4 hover:grayscale-0 hover:border-8 transition-all'
    width={1920} height={1080} layout="responsive" objectFit="cover" />
</div>
<p className='text-[12px] mt-2 mb-3 w-[80%] mx-auto mb-8'>
    After this is generated in real-time (either based on seeds or randomness) trees and big rocks aswell as smaller stones are scattered randomly throughout the map. All of this advocates a new fresh world on load everytime, and allows for easy future additions to the terrain.
</p>
</div>
<br></br>

<div className="container mx-auto my-8 w-[75%]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="relative border border-8 mb-10 aspect-video"
        style={{
            borderColor: '#222222',
            boxShadow: `5px 5px 15px #222222`
        }}>
        <div className="relative z-20"
            style={{
                boxShadow: `0 0 6px 6px #222222`
            }}
            >
            <Image
                src="/images/ChivChefModeling.jpg"
                alt="Modeling process"
                width={500}
                height={300}
                loading='lazy'
                layout="responsive"
            />
        </div>

        <div 
        className="w-3/4 text-[14px] text-center absolute left-1/2 transform -translate-x-1/2 -top-9 bg-[#555555] text-white px-3 py-2 z-10" 
        style={{ 
            fontFamily: styling.fontFamily, 
            boxShadow: `5px 5px 15px #222222`,
            textShadow: `5px 5px 15px #000000`,
        }}>
            Modeling (Blender)
        </div>
    </div>
    <div className="relative border border-8 mb-12"
        style={{
            borderColor: '#222222',
            boxShadow: `5px 5px 15px #222222`
        }}>
        <div className="relative z-20"
            style={{
                boxShadow: `0 0 6px 6px #222222`
            }}>
            <Image
                src="/images/ChivChefTexturing.png"
                alt="Texturing process"
                width={300}
                height={300}
                loading='lazy'
                layout="responsive"
            />
        </div>
        <div className="w-3/4 text-center text-[12px] absolute left-1/2 transform -translate-x-1/2 -top-9 bg-[#555555] text-white text-sm px-3 py-2 z-10" 
        style={{ 
            fontFamily: styling.fontFamily, 
            boxShadow: `5px 5px 15px #222222`,
            textShadow: `5px 5px 15px #000000`,
        }}>
            Texturing (Diffuse)
        </div>
    </div>
    <div className="relative border border-8 mb-12"
        style={{
            borderColor: '#222222',
            boxShadow: `5px 5px 15px #222222`
        }}>
        <div className="relative z-20"
            style={{
                boxShadow: `0 0 6px 6px #222222`
            }}>
            <Image
                src="/images/ChivChefMapping.jpg"
                alt="Mapping process"
                width={500}
                height={300}
                loading='lazy'
                layout="responsive"
            />
        </div>

        <div className="w-full text-[10px] absolute left-1/2 transform -translate-x-1/2 -top-9 bg-[#555555] text-center text-white px-3 py-2 z-10" 
        style={{ 
            fontFamily: styling.fontFamily, 
            boxShadow: `5px 5px 15px #222222`,
            textShadow: `5px 5px 15px #000000`,
        }}>
            Mapping (Normals, Specular, Ambient Occlusion)
        </div>
    </div>
    <div className="relative border border-8 mb-12"
        style={{
            borderColor: '#222222',
            boxShadow: `5px 5px 15px #222222`
        }}>
        <div className="relative z-20"
            style={{
                boxShadow: `0 0 6px 6px #222222`
            }}>
            <video
                muted autoPlay loop width="100%" height="100%"
                className="w-full h-full z-10"
            >
                <source src='/videos/ChivChefWalk.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <div className="w-3/4 text-center text-[12px] absolute left-1/2 transform -translate-x-1/2 -top-9 bg-[#555555] text-white text-sm px-3 py-2 z-10" 
        style={{ 
            fontFamily: styling.fontFamily, 
            boxShadow: `5px 5px 15px #222222`,
            textShadow: `5px 5px 15px #000000`,
        }}>
            Animation (Blender)
        </div>
    </div>
    </div>
</div>
                </code>
            </CardDescription> 
        </CardContent>
    </ExpandableSection>
    
    <br></br>
    <ExpandableSection 
        title="VoronoiGenerator.cs" 
        icon={CodeXml} 
        iconColor="text-[#8B4513]"
        className="border-2 w-[97%] mx-auto"
        styling={styling}>
        <CardContent>
            <CardDescription style={{color: styling.textColor, opacity: 0.9 }}>
                <code className="text-md text-black mt-6 max-w-3xl mb-2">
                    <CodeSnippetViewer 
                    filePath={'/code/VoronoiGenerator.cs'} 
                    language='csharp'
                    style='gruvbox-dark' 
                    title={'VoronoiGenerator.cs - C# Code Snippet [Unity]'}
                    className="h-screen overflow-auto text-[10px]"
                    />
                </code>
            </CardDescription>
        </CardContent>
    </ExpandableSection>
    </>
  );
}